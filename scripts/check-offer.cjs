// Run with: node scripts/check-offer.cjs
/* eslint-disable @typescript-eslint/no-require-imports -- This is a Node CommonJS verification script. */
// Render the real React homepage at campaign boundaries without changing production time.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');

const cache = new Map();
function resolveSource(fromFile, id) {
  const base = id.startsWith('@/') ? path.join(root, id.slice(2)) : path.resolve(path.dirname(fromFile), id);
  for (const ext of ['.ts', '.tsx', '/index.ts', '/index.tsx']) if (fs.existsSync(base + ext)) return base + ext;
  return null;
}

function loadTs(filename) {
  if (cache.has(filename)) return cache.get(filename).exports;
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2020 },
  });
  const loaded = new Module(filename, module);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  cache.set(filename, loaded);
  const nativeRequire = loaded.require.bind(loaded);
  loaded.require = id => {
    if (id.endsWith('.css')) return {}; // CSS has no bearing on the SSR output being checked.
    if (id.startsWith('@/') || id.startsWith('.')) {
      const source = resolveSource(filename, id);
      if (source) return loadTs(source);
    }
    return nativeRequire(id);
  };
  loaded._compile(outputText, filename);
  return loaded.exports;
}

const config = loadTs(path.join(root, 'lib/agency-config.ts'));
const Home = loadTs(path.join(root, 'app/agency-home.tsx')).default;
const cases = [
  [config.campaign.start - 1000, 'upcoming'],
  [config.campaign.start, 'active'],
  [Date.parse('2026-09-20T12:00:00+04:00'), 'active'],
  [config.campaign.end - 1, 'active'],
  [config.campaign.end, 'expired'],
  [config.campaign.end + 86400000, 'expired'],
];
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');

for (const [now, expected] of cases) {
  assert.equal(config.campaignState(now), expected);
  const html = renderToStaticMarkup(React.createElement(Home, { initialNow: now }));
  const active = expected === 'active';

  // Prices that never depend on the campaign.
  assert.ok(html.includes('1,500') && html.includes('2,000'), 'Business and Business System prices');
  assert.ok(html.includes('Online payment is not included'));
  assert.ok(html.includes('Domain, hosting, paid tools and third-party subscriptions are quoted separately'));

  // Promotional content appears only while the campaign is active.
  assert.equal(html.includes('75% OFF'), active, '75% OFF');
  assert.equal(html.includes('AED 2,400'), active, 'regular price');
  assert.equal(/<strong>600<\/strong>/.test(html), active, 'AED 600 price');
  if (!active) {
    assert.ok(!html.includes('600') && !html.includes('2,400') && !html.includes('75%'), 'no promotional figures after/before the offer');
    assert.ok(html.includes('Contact us for current pricing'), 'contact-for-pricing copy');
  }

  // Every WhatsApp link targets the agency number with a package-aware message.
  const links = [...html.matchAll(/href="(https:\/\/wa\.me[^"]+)"/g)].map(match => new URL(decode(match[1])));
  assert.ok(links.length >= 8, 'WhatsApp links present');
  const messages = links.map(link => link.searchParams.get('text'));
  for (const link of links) assert.equal(link.origin + link.pathname, 'https://wa.me/971567654647');
  for (const message of messages) {
    assert.ok(message.length > 20);
    if (!active) assert.ok(!/600|75%|2,400|offer|discount/i.test(message), 'promotional wording removed from WhatsApp text: ' + message);
  }
  assert.ok(messages.some(m => m.includes('Starter')), 'Starter message');
  assert.ok(messages.some(m => m.includes('Business website package') && m.includes('1,500')), 'Business message');
  assert.ok(messages.some(m => m.includes('Business System') && m.includes('2,000')), 'Business System message');
  if (active) assert.ok(messages.some(m => m.includes('Starter') && m.includes('AED 600')));

  const countdown = config.remainingTime(now);
  assert.ok(countdown.every(n => Number.isInteger(n) && n >= 0));
  if (expected === 'expired') assert.deepEqual(countdown, [0, 0, 0, 0]);
  assert.ok(!/\bAI\b/.test(html.replace(/<[^>]+>/g, ' ')), 'no AI wording in customer-facing copy');
  console.log(`PASS ${new Date(now).toISOString()}: ${expected}, prices and WhatsApp messages correct`);
}
assert.deepEqual(config.remainingTime(config.campaign.start), [15, 0, 0, 0]);
assert.equal(config.campaign.end - config.campaign.start, 15 * 86400000);
console.log('PASS: fixed 15-day campaign, nonnegative countdown, actual homepage SSR at six boundary states.');

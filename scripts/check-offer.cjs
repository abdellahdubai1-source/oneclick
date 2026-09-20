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

function loadTs(relativePath) {
  const filename = path.join(root, relativePath);
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2020 },
  });
  const loaded = new Module(filename, module);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  const nativeRequire = loaded.require.bind(loaded);
  loaded.require = id => id === '@/lib/agency-config' ? config : nativeRequire(id);
  loaded._compile(outputText, filename);
  return loaded.exports;
}

const config = loadTs('lib/agency-config.ts');
const Home = loadTs('app/agency-home.tsx').default;
const cases = [
  [config.campaign.start - 1000, 'upcoming'],
  [config.campaign.start, 'active'],
  [Date.parse('2026-09-20T12:00:00+04:00'), 'active'],
  [config.campaign.end - 1, 'active'],
  [config.campaign.end, 'expired'],
  [config.campaign.end + 86400000, 'expired'],
];
for (const [now, expected] of cases) {
  assert.equal(config.campaignState(now), expected);
  const html = renderToStaticMarkup(React.createElement(Home, { initialNow: now }));
  assert.ok(html.includes('1,500') && html.includes('2,000'));
  assert.equal(html.includes('75% OFF'), expected === 'active');
  assert.equal(html.includes('<strong>600</strong>'), expected === 'active');
  const links = [...html.matchAll(/href="(https:\/\/wa\.me[^\"]+)"/g)].map(match => new URL(match[1].replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"')));
  assert.ok(links.length >= 7);
  for (const link of links) {
    assert.equal(link.pathname, '/971567654647');
    const message = link.searchParams.get('text');
    assert.ok(message.length > 20);
    if (expected !== 'active') assert.ok(!message.includes('600') && !message.includes('75%'));
  }
  const countdown = config.remainingTime(now);
  assert.ok(countdown.every(n => Number.isInteger(n) && n >= 0));
  if (expected === 'expired') assert.deepEqual(countdown, [0, 0, 0, 0]);
  console.log(`PASS ${new Date(now).toISOString()}: ${expected}, prices and WhatsApp messages correct`);
}
assert.deepEqual(config.remainingTime(config.campaign.start), [15, 0, 0, 0]);
assert.equal(config.campaign.end - config.campaign.start, 15 * 86400000);
console.log('PASS: fixed 15-day campaign, nonnegative countdown, actual homepage SSR at six boundary states.');

/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS test runner. */
// Run after npm run build: node scripts/check-server.cjs
const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const server = spawn(process.execPath, [path.join(root, 'node_modules/next/dist/bin/next'), 'start', '--hostname', '127.0.0.1', '--port', '3107'], { cwd: root });
let started = false;
const timeout = setTimeout(() => { console.error('Server did not start'); server.kill(); process.exitCode = 1; }, 15000);
server.stderr.on('data', data => process.stderr.write(data));
server.on('error', error => { console.error(error); clearTimeout(timeout); process.exitCode = 1; });
server.stdout.on('data', async data => {
  if (started || !data.toString().includes('Ready')) return;
  started = true;
  try {
    const routes = [
      '/',
      '/playbook',
      '/agency/assets/oneclick-logo.png',
      '/robots.txt',
      '/sitemap.xml',
      '/manifest.webmanifest',
      '/opengraph-image',
      '/twitter-image',
      '/playbook/opengraph-image',
      '/playbook/twitter-image',
      '/icons/icon-192.png',
      '/icons/icon-512.png',
    ];
    for (const route of routes) {
      const response = await fetch('http://127.0.0.1:3107' + route);
      assert.equal(response.status, 200, route);
      if (route === '/') {
        const html = await response.text();
        for (const content of [
          'A strong business deserves',
          '1,500',
          '2,000',
          'Online payment is not included',
          '971567654647',
          '<link rel="canonical" href="https://oneclickbyabdellah.com"',
          '"@type":"Organization"',
          '"@type":"FAQPage"',
        ]) {
          assert.ok(html.includes(content), content);
        }
        assert.ok(!html.includes('agency/site.js'), 'Legacy script must not load');
      }
      if (route === '/manifest.webmanifest') {
        const manifest = await response.json();
        assert.equal(manifest.name, 'OneClick Digital Solution');
        assert.ok(manifest.icons.length >= 2, 'manifest icons');
      }
      console.log('PASS HTTP 200:', route);
    }
  } catch (error) { console.error(error); process.exitCode = 1; }
  finally { clearTimeout(timeout); server.kill(); }
});

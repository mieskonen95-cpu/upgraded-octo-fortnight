import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('app version matches the service worker cache version', () => {
  const app = readFileSync(new URL('../js/app.js', import.meta.url), 'utf8').match(/APP_VERSION = '([^']+)'/)?.[1];
  const sw = readFileSync(new URL('../sw.js', import.meta.url), 'utf8').match(/VERSION = '([^']+)'/)?.[1];
  assert.ok(app);
  assert.equal(app, sw);
});

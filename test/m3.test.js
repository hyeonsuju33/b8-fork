import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f3 } from '../src/m3.js';
test('f3', () => assert.equal(f3(2, 3), 5));

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f4 } from '../src/m4.js';
test('f4', () => assert.equal(f4(2, 3), 5));

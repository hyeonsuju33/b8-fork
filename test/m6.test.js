import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f6 } from '../src/m6.js';
test('f6', () => assert.equal(f6(2, 3), 5));

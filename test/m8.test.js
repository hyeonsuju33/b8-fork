import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f8 } from '../src/m8.js';
test('f8', () => assert.equal(f8(2, 3), 5));

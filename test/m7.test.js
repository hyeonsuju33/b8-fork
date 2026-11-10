import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f7 } from '../src/m7.js';
test('f7', () => assert.equal(f7(2, 3), 5));

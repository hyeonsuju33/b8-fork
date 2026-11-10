import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f5 } from '../src/m5.js';
test('f5', () => assert.equal(f5(2, 3), 5));

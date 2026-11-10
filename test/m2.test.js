import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f2 } from '../src/m2.js';
test('f2', () => assert.equal(f2(2, 3), 5));

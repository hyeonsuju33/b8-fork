import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f9 } from '../src/m9.js';
test('f9', () => assert.equal(f9(2, 3), 5));

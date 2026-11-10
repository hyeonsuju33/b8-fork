import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f10 } from '../src/m10.js';
test('f10', () => assert.equal(f10(2, 3), 5));

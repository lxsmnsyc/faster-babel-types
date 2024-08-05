import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DoWhileStatement';

export function doWhileStatement(
  test: t.Expression,
  body: t.Statement,
): t.DoWhileStatement {
  return {
    type: TYPE,
    test,
    body,
  };
}

export function isDoWhileStatement(
  node: t.Node | null | undefined,
): node is t.DoWhileStatement {
  return is(TYPE, node);
}

export function assertDoWhileStatement(
  node: t.Node | null | undefined,
): asserts node is t.DoWhileStatement {
  assert(TYPE, node);
}

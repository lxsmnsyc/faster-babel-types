import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'WhileStatement';

export function whileStatement(
  test: t.Expression,
  body: t.Statement,
): t.WhileStatement {
  return {
    type: TYPE,
    test,
    body,
  };
}

export function isWhileStatement(
  node: t.Node | null | undefined,
): node is t.WhileStatement {
  return is(TYPE, node);
}

export function assertWhileStatement(
  node: t.Node | null | undefined,
): asserts node is t.WhileStatement {
  assert(TYPE, node);
}

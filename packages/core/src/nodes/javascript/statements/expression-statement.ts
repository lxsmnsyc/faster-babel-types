import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ExpressionStatement';

export function expressionStatement(
  expression: t.Expression,
): t.ExpressionStatement {
  return {
    type: TYPE,
    expression,
  };
}

export function isExpressionStatement(
  node: t.Node | null | undefined,
): node is t.ExpressionStatement {
  return is(TYPE, node);
}

export function assertExpressionStatement(
  node: t.Node | null | undefined,
): asserts node is t.ExpressionStatement {
  assert(TYPE, node);
}

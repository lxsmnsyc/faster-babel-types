import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'UnaryExpression';

export type UnaryExpressionOperator =
  | 'void'
  | 'throw'
  | 'delete'
  | '!'
  | '+'
  | '-'
  | '~'
  | 'typeof';

export function unaryExpression(
  operator: UnaryExpressionOperator,
  argument: t.Expression,
  prefix = true,
): t.UnaryExpression {
  return {
    type: TYPE,
    operator,
    argument,
    prefix,
  };
}

export function isUnaryExpression(
  node: t.Node | null | undefined,
): node is t.UnaryExpression {
  return is(TYPE, node);
}

export function assertUnaryExpression(
  node: t.Node | null | undefined,
): asserts node is t.UnaryExpression {
  assert(TYPE, node);
}

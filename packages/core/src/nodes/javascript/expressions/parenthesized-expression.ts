import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ParenthesizedExpression';

export function parenthesizedExpression(
  expression: t.Expression,
): t.ParenthesizedExpression {
  return {
    type: TYPE,
    expression,
  };
}

export function isParenthesizedExpression(
  node: t.Node | null | undefined,
): node is t.ParenthesizedExpression {
  return is(TYPE, node);
}

export function assertParenthesizedExpression(
  node: t.Node | null | undefined,
): asserts node is t.ParenthesizedExpression {
  assert(TYPE, node);
}

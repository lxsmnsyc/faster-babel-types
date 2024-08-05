import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'BinaryExpression';

export type BinaryExpressionOperator =
  | '+'
  | '-'
  | '/'
  | '%'
  | '*'
  | '**'
  | '&'
  | '|'
  | '>>'
  | '>>>'
  | '<<'
  | '^'
  | '=='
  | '==='
  | '!='
  | '!=='
  | 'in'
  | 'instanceof'
  | '>'
  | '<'
  | '>='
  | '<='
  | '|>';

export function binaryExpression(
  operator: BinaryExpressionOperator,
  left: t.Expression | t.PrivateName,
  right: t.Expression,
): t.BinaryExpression {
  return {
    type: TYPE,
    operator,
    left,
    right,
  };
}

export function isBinaryExpression(
  node: t.Node | null | undefined,
): node is t.BinaryExpression {
  return is(TYPE, node);
}

export function assertBinaryExpression(
  node: t.Node | null | undefined,
): asserts node is t.BinaryExpression {
  assert(TYPE, node);
}

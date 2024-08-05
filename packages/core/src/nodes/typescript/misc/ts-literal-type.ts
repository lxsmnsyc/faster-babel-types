import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSLiteralType';

export function tsLiteralType(
  literal:
    | t.NumericLiteral
    | t.StringLiteral
    | t.BooleanLiteral
    | t.BigIntLiteral
    | t.TemplateLiteral
    | t.UnaryExpression,
): t.TSLiteralType {
  return {
    type: TYPE,
    literal,
  };
}

export function isTSLiteralType(
  node: t.Node | null | undefined,
): node is t.TSLiteralType {
  return is(TYPE, node);
}

export function assertTSLiteralType(
  node: t.Node | null | undefined,
): asserts node is t.TSLiteralType {
  assert(TYPE, node);
}

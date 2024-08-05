import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TypeCastExpression';

export function typeCastExpression(
  expression: t.Expression,
  typeAnnotation: t.TypeAnnotation,
): t.TypeCastExpression {
  return {
    type: TYPE,
    expression,
    typeAnnotation,
  };
}

export function isTypeCastExpression(
  node: t.Node | null | undefined,
): node is t.TypeCastExpression {
  return is(TYPE, node);
}

export function assertTypeCastExpression(
  node: t.Node | null | undefined,
): asserts node is t.TypeCastExpression {
  assert(TYPE, node);
}

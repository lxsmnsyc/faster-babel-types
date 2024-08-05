import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSSatisfiesExpression';

export function tsSatisfiesExpression(
  expression: t.Expression,
  typeAnnotation: t.TSType,
): t.TSSatisfiesExpression {
  return {
    type: TYPE,
    expression,
    typeAnnotation,
  };
}

export function isTSSatisfiesExpression(
  node: t.Node | null | undefined,
): node is t.TSSatisfiesExpression {
  return is(TYPE, node);
}

export function assertTSSatisfiesExpression(
  node: t.Node | null | undefined,
): asserts node is t.TSSatisfiesExpression {
  assert(TYPE, node);
}

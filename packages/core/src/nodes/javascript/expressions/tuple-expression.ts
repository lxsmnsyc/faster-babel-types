import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TupleExpression';

export function tupleExpression(
  elements: Array<t.Expression | t.SpreadElement> = [],
): t.TupleExpression {
  return {
    type: TYPE,
    elements,
  };
}

export function isTupleExpression(
  node: t.Node | null | undefined,
): node is t.TupleExpression {
  return is(TYPE, node);
}

export function assertTupleExpression(
  node: t.Node | null | undefined,
): asserts node is t.TupleExpression {
  assert(TYPE, node);
}

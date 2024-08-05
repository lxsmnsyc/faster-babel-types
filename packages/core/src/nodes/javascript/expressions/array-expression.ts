import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ArrayExpression';

export function arrayExpression(
  elements: Array<null | t.Expression | t.SpreadElement> = [],
): t.ArrayExpression {
  return {
    type: TYPE,
    elements,
  };
}

export function isArrayExpression(
  node: t.Node | null | undefined,
): node is t.ArrayExpression {
  return is(TYPE, node);
}

export function assertArrayExpression(
  node: t.Node | null | undefined,
): asserts node is t.ArrayExpression {
  assert(TYPE, node);
}

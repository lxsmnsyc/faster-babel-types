import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectExpression';

export function objectExpression(
  properties: Array<t.ObjectMethod | t.ObjectProperty | t.SpreadElement>,
): t.ObjectExpression {
  return {
    type: TYPE,
    properties,
  };
}

export function isObjectExpression(
  node: t.Node | null | undefined,
): node is t.ObjectExpression {
  return is(TYPE, node);
}

export function assertObjectExpression(
  node: t.Node | null | undefined,
): asserts node is t.ObjectExpression {
  assert(TYPE, node);
}

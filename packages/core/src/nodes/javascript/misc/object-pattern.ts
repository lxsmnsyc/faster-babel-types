import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectPattern';

export function objectPattern(
  properties: Array<t.RestElement | t.ObjectProperty>,
): t.ObjectPattern {
  return {
    type: TYPE,
    properties,
  };
}

export function isObjectPattern(
  node: t.Node | null | undefined,
): node is t.ObjectPattern {
  return is(TYPE, node);
}

export function assertObjectPattern(
  node: t.Node | null | undefined,
): asserts node is t.ObjectPattern {
  assert(TYPE, node);
}

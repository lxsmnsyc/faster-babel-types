import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ArrayPattern';

export function arrayPattern(
  elements: Array<null | t.PatternLike | t.LVal>,
): t.ArrayPattern {
  return {
    type: TYPE,
    elements,
  };
}

export function isArrayPattern(
  node: t.Node | null | undefined,
): node is t.ArrayPattern {
  return is(TYPE, node);
}

export function assertArrayPattern(
  node: t.Node | null | undefined,
): asserts node is t.ArrayPattern {
  assert(TYPE, node);
}

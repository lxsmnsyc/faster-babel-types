import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'SpreadElement';

export function spreadElement(argument: t.Expression): t.SpreadElement {
  return {
    type: TYPE,
    argument,
  };
}

export function isSpreadElement(
  node: t.Node | null | undefined,
): node is t.SpreadElement {
  return is(TYPE, node);
}

export function assertSpreadElement(
  node: t.Node | null | undefined,
): asserts node is t.SpreadElement {
  assert(TYPE, node);
}

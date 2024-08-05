import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'RestElement';

export function restElement(argument: t.LVal): t.RestElement {
  return {
    type: TYPE,
    argument,
  };
}

export function isRestElement(
  node: t.Node | null | undefined,
): node is t.RestElement {
  return is(TYPE, node);
}

export function assertRestElement(
  node: t.Node | null | undefined,
): asserts node is t.RestElement {
  assert(TYPE, node);
}

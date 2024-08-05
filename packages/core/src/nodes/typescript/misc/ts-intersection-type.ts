import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSIntersectionType';

export function tsIntersectionType(types: t.TSType[]): t.TSIntersectionType {
  return {
    type: TYPE,
    types,
  };
}

export function isTSIntersectionType(
  node: t.Node | null | undefined,
): node is t.TSIntersectionType {
  return is(TYPE, node);
}

export function assertTSIntersectionType(
  node: t.Node | null | undefined,
): asserts node is t.TSIntersectionType {
  assert(TYPE, node);
}

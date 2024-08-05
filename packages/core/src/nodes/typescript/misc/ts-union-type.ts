import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSUnionType';

export function tsUnionType(types: t.TSType[]): t.TSUnionType {
  return {
    type: TYPE,
    types,
  };
}

export function isTSUnionType(
  node: t.Node | null | undefined,
): node is t.TSUnionType {
  return is(TYPE, node);
}

export function assertTSUnionType(
  node: t.Node | null | undefined,
): asserts node is t.TSUnionType {
  assert(TYPE, node);
}

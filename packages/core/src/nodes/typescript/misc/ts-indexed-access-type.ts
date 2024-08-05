import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSIndexedAccessType';

export function tsIndexedAccessType(
  objectType: t.TSType,
  indexType: t.TSType,
): t.TSIndexedAccessType {
  return {
    type: TYPE,
    objectType,
    indexType,
  };
}

export function isTSIndexedAccessType(
  node: t.Node | null | undefined,
): node is t.TSIndexedAccessType {
  return is(TYPE, node);
}

export function assertTSIndexedAccessType(
  node: t.Node | null | undefined,
): asserts node is t.TSIndexedAccessType {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'IndexedAccessType';

export function indexedAccessType(
  objectType: t.FlowType,
  indexType: t.FlowType,
): t.IndexedAccessType {
  return {
    type: TYPE,
    objectType,
    indexType,
  };
}

export function isIndexedAccessType(
  node: t.Node | null | undefined,
): node is t.IndexedAccessType {
  return is(TYPE, node);
}

export function assertIndexedAccessType(
  node: t.Node | null | undefined,
): asserts node is t.IndexedAccessType {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'OptionalIndexedAccessType';

export function optionalIndexedAccessType(
  objectType: t.FlowType,
  indexType: t.FlowType,
): t.OptionalIndexedAccessType {
  return {
    type: TYPE,
    objectType,
    indexType,
    optional: false,
  };
}

export function isOptionalIndexedAccessType(
  node: t.Node | null | undefined,
): node is t.OptionalIndexedAccessType {
  return is(TYPE, node);
}

export function assertOptionalIndexedAccessType(
  node: t.Node | null | undefined,
): asserts node is t.OptionalIndexedAccessType {
  assert(TYPE, node);
}

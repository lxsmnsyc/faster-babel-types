import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectTypeAnnotation';

export function objectTypeAnnotation(
  properties: Array<t.ObjectTypeProperty | t.ObjectTypeSpreadProperty>,
  indexers: t.ObjectTypeIndexer[] = [],
  callProperties: t.ObjectTypeCallProperty[] = [],
  internalSlots: t.ObjectTypeInternalSlot[] = [],
  exact = false,
): t.ObjectTypeAnnotation {
  return {
    type: TYPE,
    properties,
    indexers,
    callProperties,
    internalSlots,
    exact,
  };
}

export function isObjectTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.ObjectTypeAnnotation {
  return is(TYPE, node);
}

export function assertObjectTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.ObjectTypeAnnotation {
  assert(TYPE, node);
}

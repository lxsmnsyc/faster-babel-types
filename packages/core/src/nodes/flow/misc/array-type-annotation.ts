import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ArrayTypeAnnotation';

export function arrayTypeAnnotation(
  elementType: t.FlowType,
): t.ArrayTypeAnnotation {
  return {
    type: TYPE,
    elementType,
  };
}

export function isArrayTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.ArrayTypeAnnotation {
  return is(TYPE, node);
}

export function assertArrayTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.ArrayTypeAnnotation {
  assert(TYPE, node);
}

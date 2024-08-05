import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'IntersectionTypeAnnotation';

export function intersectionTypeAnnotation(
  types: t.FlowType[],
): t.IntersectionTypeAnnotation {
  return {
    type: TYPE,
    types,
  };
}

export function isIntersectionTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.IntersectionTypeAnnotation {
  return is(TYPE, node);
}

export function assertIntersectionTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.IntersectionTypeAnnotation {
  assert(TYPE, node);
}

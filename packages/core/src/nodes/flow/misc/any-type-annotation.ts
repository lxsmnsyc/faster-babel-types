import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'AnyTypeAnnotation';

export function anyTypeAnnotation(): t.AnyTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isAnyTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.AnyTypeAnnotation {
  return is(TYPE, node);
}

export function assertAnyTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.AnyTypeAnnotation {
  assert(TYPE, node);
}

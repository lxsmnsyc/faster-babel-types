import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'VoidTypeAnnotation';

export function voidTypeAnnotation(): t.VoidTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isVoidTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.VoidTypeAnnotation {
  return is(TYPE, node);
}

export function assertVoidTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.VoidTypeAnnotation {
  assert(TYPE, node);
}

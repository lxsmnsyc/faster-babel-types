import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'MixedTypeAnnotation';

export function mixedTypeAnnotation(): t.MixedTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isMixedTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.MixedTypeAnnotation {
  return is(TYPE, node);
}

export function assertMixedTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.MixedTypeAnnotation {
  assert(TYPE, node);
}

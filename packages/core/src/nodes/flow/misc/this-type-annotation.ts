import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ThisTypeAnnotation';

export function thisTypeAnnotation(): t.ThisTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isThisTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.ThisTypeAnnotation {
  return is(TYPE, node);
}

export function assertThisTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.ThisTypeAnnotation {
  assert(TYPE, node);
}

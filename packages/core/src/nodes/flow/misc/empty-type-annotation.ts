import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EmptyTypeAnnotation';

export function emptyTypeAnnotation(): t.EmptyTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isEmptyTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.EmptyTypeAnnotation {
  return is(TYPE, node);
}

export function assertEmptyTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.EmptyTypeAnnotation {
  assert(TYPE, node);
}

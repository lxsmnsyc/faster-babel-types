import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'BooleanTypeAnnotation';

export function booleanTypeAnnotation(): t.BooleanTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isBooleanTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.BooleanTypeAnnotation {
  return is(TYPE, node);
}

export function assertBooleanTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.BooleanTypeAnnotation {
  assert(TYPE, node);
}

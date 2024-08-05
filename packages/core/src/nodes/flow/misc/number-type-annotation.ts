import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'NumberTypeAnnotation';

export function numberTypeAnnotation(): t.NumberTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isNumberTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.NumberTypeAnnotation {
  return is(TYPE, node);
}

export function assertNumberTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.NumberTypeAnnotation {
  assert(TYPE, node);
}

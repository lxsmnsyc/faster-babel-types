import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'StringTypeAnnotation';

export function stringTypeAnnotation(): t.StringTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isStringTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.StringTypeAnnotation {
  return is(TYPE, node);
}

export function assertStringTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.StringTypeAnnotation {
  assert(TYPE, node);
}

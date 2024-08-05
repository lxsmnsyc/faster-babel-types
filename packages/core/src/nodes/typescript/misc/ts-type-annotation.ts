import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeAnnotation';

export function tsTypeAnnotation(typeAnnotation: t.TSType): t.TSTypeAnnotation {
  return {
    type: TYPE,
    typeAnnotation,
  };
}

export function isTSTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.TSTypeAnnotation {
  return is(TYPE, node);
}

export function assertTSTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeAnnotation {
  assert(TYPE, node);
}

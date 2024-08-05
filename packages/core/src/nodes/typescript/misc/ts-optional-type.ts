import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSOptionalType';

export function tsOptionalType(typeAnnotation: t.TSType): t.TSOptionalType {
  return {
    type: TYPE,
    typeAnnotation,
  };
}

export function isTSOptionalType(
  node: t.Node | null | undefined,
): node is t.TSOptionalType {
  return is(TYPE, node);
}

export function assertTSOptionalType(
  node: t.Node | null | undefined,
): asserts node is t.TSOptionalType {
  assert(TYPE, node);
}

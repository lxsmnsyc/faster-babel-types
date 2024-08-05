import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSArrayType';

export function tsArrayType(elementType: t.TSType): t.TSArrayType {
  return {
    type: TYPE,
    elementType,
  };
}

export function isTSArrayType(
  node: t.Node | null | undefined,
): node is t.TSArrayType {
  return is(TYPE, node);
}

export function assertTSArrayType(
  node: t.Node | null | undefined,
): asserts node is t.TSArrayType {
  assert(TYPE, node);
}

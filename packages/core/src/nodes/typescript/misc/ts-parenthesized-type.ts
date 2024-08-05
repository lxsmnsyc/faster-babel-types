import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSParenthesizedType';

export function tsParenthesizedType(
  typeAnnotation: t.TSType,
): t.TSParenthesizedType {
  return {
    type: TYPE,
    typeAnnotation,
  };
}

export function isTSParenthesizedType(
  node: t.Node | null | undefined,
): node is t.TSParenthesizedType {
  return is(TYPE, node);
}

export function assertTSParenthesizedType(
  node: t.Node | null | undefined,
): asserts node is t.TSParenthesizedType {
  assert(TYPE, node);
}

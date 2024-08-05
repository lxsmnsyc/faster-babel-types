import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSRestType';

export function tsRestType(typeAnnotation: t.TSType): t.TSRestType {
  return {
    type: TYPE,
    typeAnnotation,
  };
}

export function isTSRestType(
  node: t.Node | null | undefined,
): node is t.TSRestType {
  return is(TYPE, node);
}

export function assertTSRestType(
  node: t.Node | null | undefined,
): asserts node is t.TSRestType {
  assert(TYPE, node);
}

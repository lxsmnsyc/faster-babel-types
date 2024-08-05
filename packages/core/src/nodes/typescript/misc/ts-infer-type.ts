import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSInferType';

export function tsInferType(typeParameter: t.TSTypeParameter): t.TSInferType {
  return {
    type: TYPE,
    typeParameter,
  };
}

export function isTSInferType(
  node: t.Node | null | undefined,
): node is t.TSInferType {
  return is(TYPE, node);
}

export function assertTSInferType(
  node: t.Node | null | undefined,
): asserts node is t.TSInferType {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSMappedType';

export function tsMappedType(
  typeParameter: t.TSTypeParameter,
  typeAnnotation: t.TSType | null | undefined = null,
  nameType: t.TSType | null | undefined = null,
): t.TSMappedType {
  return {
    type: TYPE,
    typeParameter,
    typeAnnotation,
    nameType,
  };
}

export function isTSMappedType(
  node: t.Node | null | undefined,
): node is t.TSMappedType {
  return is(TYPE, node);
}

export function assertTSMappedType(
  node: t.Node | null | undefined,
): asserts node is t.TSMappedType {
  assert(TYPE, node);
}

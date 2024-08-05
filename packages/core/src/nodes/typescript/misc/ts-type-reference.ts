import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeReference';

export function tsTypeReference(
  typeName: t.TSEntityName,
  typeParameters: t.TSTypeParameterInstantiation | null | undefined = null,
): t.TSTypeReference {
  return {
    type: TYPE,
    typeName,
    typeParameters,
  };
}

export function isTSTypeReference(
  node: t.Node | null | undefined,
): node is t.TSTypeReference {
  return is(TYPE, node);
}

export function assertTSTypeReference(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeReference {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'OpaqueType';

export function opaqueType(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined,
  supertype: t.FlowType | null | undefined,
  impltype: t.FlowType,
): t.OpaqueType {
  return {
    type: TYPE,
    id,
    typeParameters,
    supertype,
    impltype,
  };
}

export function isOpaqueType(
  node: t.Node | null | undefined,
): node is t.OpaqueType {
  return is(TYPE, node);
}

export function assertOpaqueType(
  node: t.Node | null | undefined,
): asserts node is t.OpaqueType {
  assert(TYPE, node);
}

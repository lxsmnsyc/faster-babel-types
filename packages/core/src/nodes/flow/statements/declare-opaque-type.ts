import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareOpaqueType';

export function declareOpaqueType(
  id: t.Identifier,
  typeParameters?: t.TypeParameterDeclaration | null,
  supertype?: t.FlowType | null,
): t.DeclareOpaqueType {
  return {
    type: TYPE,
    id,
    typeParameters,
    supertype,
  };
}

export function isDeclareOpaqueType(
  node: t.Node | null | undefined,
): node is t.DeclareOpaqueType {
  return is(TYPE, node);
}

export function assertDeclareOpaqueType(
  node: t.Node | null | undefined,
): asserts node is t.DeclareOpaqueType {
  assert(TYPE, node);
}

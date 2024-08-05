import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareInterface';

export function declareInterface(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined,
  interfaceExtends: t.InterfaceExtends[] | null | undefined,
  body: t.ObjectTypeAnnotation,
): t.DeclareInterface {
  return {
    type: TYPE,
    id,
    typeParameters,
    extends: interfaceExtends,
    body,
  };
}

export function isDeclareInterface(
  node: t.Node | null | undefined,
): node is t.DeclareInterface {
  return is(TYPE, node);
}

export function assertDeclareInterface(
  node: t.Node | null | undefined,
): asserts node is t.DeclareInterface {
  assert(TYPE, node);
}

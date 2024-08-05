import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'InterfaceDeclaration';

export function interfaceDeclaration(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined,
  interfaceExtends: t.InterfaceExtends[] | null | undefined,
  body: t.ObjectTypeAnnotation,
): t.InterfaceDeclaration {
  return {
    type: TYPE,
    id,
    typeParameters,
    extends: interfaceExtends,
    body,
  };
}

export function isInterfaceDeclaration(
  node: t.Node | null | undefined,
): node is t.InterfaceDeclaration {
  return is(TYPE, node);
}

export function assertInterfaceDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.InterfaceDeclaration {
  assert(TYPE, node);
}

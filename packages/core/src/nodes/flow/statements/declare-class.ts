import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareClass';

export function declareClass(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined,
  interfaceExtends: t.InterfaceExtends[] | null | undefined,
  body: t.ObjectTypeAnnotation,
): t.DeclareClass {
  return {
    type: TYPE,
    id,
    typeParameters,
    extends: interfaceExtends,
    body,
  };
}

export function isDeclareClass(
  node: t.Node | null | undefined,
): node is t.DeclareClass {
  return is(TYPE, node);
}

export function assertDeclareClass(
  node: t.Node | null | undefined,
): asserts node is t.DeclareClass {
  assert(TYPE, node);
}

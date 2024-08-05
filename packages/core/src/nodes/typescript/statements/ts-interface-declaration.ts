import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSInterfaceDeclaration';

export function tsInterfaceDeclaration(
  id: t.Identifier,
  typeParameters: t.TSTypeParameterDeclaration | null | undefined,
  interfaceExtends: t.TSExpressionWithTypeArguments[] | null | undefined,
  body: t.TSInterfaceBody,
): t.TSInterfaceDeclaration {
  return {
    type: TYPE,
    id,
    typeParameters,
    extends: interfaceExtends,
    body,
  };
}

export function isTSInterfaceDeclaration(
  node: t.Node | null | undefined,
): node is t.TSInterfaceDeclaration {
  return is(TYPE, node);
}

export function assertTSInterfaceDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSInterfaceDeclaration {
  assert(TYPE, node);
}

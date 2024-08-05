import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareTypeAlias';

export function declareTypeAlias(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null,
  right: t.FlowType,
): t.DeclareTypeAlias {
  return {
    type: TYPE,
    id,
    typeParameters,
    right,
  };
}

export function isDeclareTypeAlias(
  node: t.Node | null | undefined,
): node is t.DeclareTypeAlias {
  return is(TYPE, node);
}

export function assertDeclareTypeAlias(
  node: t.Node | null | undefined,
): asserts node is t.DeclareTypeAlias {
  assert(TYPE, node);
}

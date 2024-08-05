import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeAliasDeclaration';

export function tsTypeAliasDeclaration(
  id: t.Identifier,
  typeParameters: t.TSTypeParameterDeclaration | null | undefined,
  typeAnnotation: t.TSType,
): t.TSTypeAliasDeclaration {
  return {
    type: TYPE,
    id,
    typeParameters,
    typeAnnotation,
  };
}

export function isTSTypeAliasDeclaration(
  node: t.Node | null | undefined,
): node is t.TSTypeAliasDeclaration {
  return is(TYPE, node);
}

export function assertTSTypeAliasDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeAliasDeclaration {
  assert(TYPE, node);
}

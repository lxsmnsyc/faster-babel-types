import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareExportAllDeclaration';

export function declareExportAllDeclaration(
  source: t.StringLiteral,
): t.DeclareExportAllDeclaration {
  return {
    type: TYPE,
    source,
  };
}

export function isDeclareExportAllDeclaration(
  node: t.Node | null | undefined,
): node is t.DeclareExportAllDeclaration {
  return is(TYPE, node);
}

export function assertDeclareExportAllDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.DeclareExportAllDeclaration {
  assert(TYPE, node);
}

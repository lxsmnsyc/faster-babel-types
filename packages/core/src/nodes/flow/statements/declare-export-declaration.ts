import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareExportDeclaration';

export function declareExportDeclaration(
  declaration?: t.Flow | null,
  specifiers?: Array<t.ExportSpecifier | t.ExportNamespaceSpecifier> | null,
  source?: t.StringLiteral | null,
): t.DeclareExportDeclaration {
  return {
    type: TYPE,
    declaration,
    specifiers,
    source,
  };
}

export function isDeclareExportDeclaration(
  node: t.Node | null | undefined,
): node is t.DeclareExportDeclaration {
  return is(TYPE, node);
}

export function assertDeclareExportDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.DeclareExportDeclaration {
  assert(TYPE, node);
}

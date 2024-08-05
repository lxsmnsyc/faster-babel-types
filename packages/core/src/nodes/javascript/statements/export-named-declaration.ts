import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ExportNamedDeclaration';

export function exportNamedDeclaration(
  declaration: t.Declaration | null | undefined = null,
  specifiers: Array<
    t.ExportSpecifier | t.ExportDefaultSpecifier | t.ExportNamespaceSpecifier
  > = [],
  source: t.StringLiteral | null | undefined = null,
): t.ExportNamedDeclaration {
  return {
    type: TYPE,
    declaration,
    specifiers,
    source,
  };
}

export function isExportNamedDeclaration(
  node: t.Node | null | undefined,
): node is t.ExportNamedDeclaration {
  return is(TYPE, node);
}

export function assertExportNamedDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.ExportNamedDeclaration {
  assert(TYPE, node);
}

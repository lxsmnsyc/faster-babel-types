import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ImportDeclaration';

export function importDeclaration(
  specifiers: Array<
    t.ImportSpecifier | t.ImportDefaultSpecifier | t.ImportNamespaceSpecifier
  >,
  source: t.StringLiteral,
): t.ImportDeclaration {
  return {
    type: TYPE,
    specifiers,
    source,
  };
}

export function isImportDeclaration(
  node: t.Node | null | undefined,
): node is t.ImportDeclaration {
  return is(TYPE, node);
}

export function assertImportDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.ImportDeclaration {
  assert(TYPE, node);
}

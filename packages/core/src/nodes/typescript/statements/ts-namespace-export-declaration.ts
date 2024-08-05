import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSNamespaceExportDeclaration';

export function tsNamespaceExportDeclaration(
  id: t.Identifier,
): t.TSNamespaceExportDeclaration {
  return {
    type: TYPE,
    id,
  };
}

export function isTSNamespaceExportDeclaration(
  node: t.Node | null | undefined,
): node is t.TSNamespaceExportDeclaration {
  return is(TYPE, node);
}

export function assertTSNamespaceExportDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSNamespaceExportDeclaration {
  assert(TYPE, node);
}

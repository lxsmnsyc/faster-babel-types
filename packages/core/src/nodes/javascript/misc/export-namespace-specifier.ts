import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ExportNamespaceSpecifier';

export function exportNamespaceSpecifier(
  exported: t.Identifier,
): t.ExportNamespaceSpecifier {
  return {
    type: TYPE,
    exported,
  };
}

export function isExportNamespaceSpecifier(
  node: t.Node | null | undefined,
): node is t.ExportNamespaceSpecifier {
  return is(TYPE, node);
}

export function assertExportNamespaceSpecifier(
  node: t.Node | null | undefined,
): asserts node is t.ExportNamespaceSpecifier {
  assert(TYPE, node);
}

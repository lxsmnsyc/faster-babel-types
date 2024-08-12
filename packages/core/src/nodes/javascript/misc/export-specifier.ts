import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ExportSpecifier';

export function exportSpecifier(
  local: t.Identifier,
  exported: t.Identifier | t.StringLiteral,
): t.ExportSpecifier {
  return {
    type: TYPE,
    local,
    exported,
  };
}

export function isExportSpecifier(
  node: t.Node | null | undefined,
): node is t.ExportSpecifier {
  return is(TYPE, node);
}

export function assertExportSpecifier(
  node: t.Node | null | undefined,
): asserts node is t.ExportSpecifier {
  assert(TYPE, node);
}

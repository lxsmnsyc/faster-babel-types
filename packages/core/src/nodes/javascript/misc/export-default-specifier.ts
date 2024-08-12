import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ExportDefaultSpecifier';

export function exportDefaultSpecifier(
  exported: t.Identifier,
): t.ExportDefaultSpecifier {
  return {
    type: TYPE,
    exported,
  };
}

export function isExportDefaultSpecifier(
  node: t.Node | null | undefined,
): node is t.ExportDefaultSpecifier {
  return is(TYPE, node);
}

export function assertExportDefaultSpecifier(
  node: t.Node | null | undefined,
): asserts node is t.ExportDefaultSpecifier {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ExportAllDeclaration';

export function exportAllDeclaration(
  source: t.StringLiteral,
): t.ExportAllDeclaration {
  return {
    type: TYPE,
    source,
  };
}

export function isExportAllDeclaration(
  node: t.Node | null | undefined,
): node is t.ExportAllDeclaration {
  return is(TYPE, node);
}

export function assertExportAllDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.ExportAllDeclaration {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ExportDefaultDeclaration';

export function exportDefaultDeclaration(
  declaration:
    | t.TSDeclareFunction
    | t.FunctionDeclaration
    | t.ClassDeclaration
    | t.Expression,
): t.ExportDefaultDeclaration {
  return {
    type: TYPE,
    declaration,
  };
}

export function isExportDefaultDeclaration(
  node: t.Node | null | undefined,
): node is t.ExportDefaultDeclaration {
  return is(TYPE, node);
}

export function assertExportDefaultDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.ExportDefaultDeclaration {
  assert(TYPE, node);
}

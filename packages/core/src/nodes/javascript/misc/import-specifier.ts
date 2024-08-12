import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ImportSpecifier';

export function importSpecifier(
  local: t.Identifier,
  imported: t.Identifier | t.StringLiteral,
): t.ImportSpecifier {
  return {
    type: TYPE,
    local,
    imported,
  };
}

export function isImportSpecifier(
  node: t.Node | null | undefined,
): node is t.ImportSpecifier {
  return is(TYPE, node);
}

export function assertImportSpecifier(
  node: t.Node | null | undefined,
): asserts node is t.ImportSpecifier {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ImportNamespaceSpecifier';

export function importNamespaceSpecifier(
  local: t.Identifier,
): t.ImportNamespaceSpecifier {
  return {
    type: TYPE,
    local,
  };
}

export function isImportNamespaceSpecifier(
  node: t.Node | null | undefined,
): node is t.ImportNamespaceSpecifier {
  return is(TYPE, node);
}

export function assertImportNamespaceSpecifier(
  node: t.Node | null | undefined,
): asserts node is t.ImportNamespaceSpecifier {
  assert(TYPE, node);
}

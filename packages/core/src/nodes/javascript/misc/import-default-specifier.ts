import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ImportDefaultSpecifier';

export function importDefaultSpecifier(
  local: t.Identifier,
): t.ImportDefaultSpecifier {
  return {
    type: TYPE,
    local,
  };
}

export function isImportDefaultSpecifier(
  node: t.Node | null | undefined,
): node is t.ImportDefaultSpecifier {
  return is(TYPE, node);
}

export function assertImportDefaultSpecifier(
  node: t.Node | null | undefined,
): asserts node is t.ImportDefaultSpecifier {
  assert(TYPE, node);
}

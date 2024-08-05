import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSModuleDeclaration';

export function tsModuleDeclaration(
  id: t.Identifier | t.StringLiteral,
  body: t.TSModuleBlock | t.TSModuleDeclaration,
): t.TSModuleDeclaration {
  return {
    type: TYPE,
    id,
    body,
  };
}

export function isTSModuleDeclaration(
  node: t.Node | null | undefined,
): node is t.TSModuleDeclaration {
  return is(TYPE, node);
}

export function assertTSModuleDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSModuleDeclaration {
  assert(TYPE, node);
}

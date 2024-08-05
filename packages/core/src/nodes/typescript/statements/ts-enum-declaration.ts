import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSEnumDeclaration';

export function tsEnumDeclaration(
  id: t.Identifier,
  members: t.TSEnumMember[],
): t.TSEnumDeclaration {
  return {
    type: TYPE,
    id,
    members,
  };
}

export function isTSEnumDeclaration(
  node: t.Node | null | undefined,
): node is t.TSEnumDeclaration {
  return is(TYPE, node);
}

export function assertTSEnumDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSEnumDeclaration {
  assert(TYPE, node);
}

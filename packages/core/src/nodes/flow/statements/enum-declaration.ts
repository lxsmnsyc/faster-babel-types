import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumDeclaration';

export function enumDeclaration(
  id: t.Identifier,
  body:
    | t.EnumBooleanBody
    | t.EnumNumberBody
    | t.EnumStringBody
    | t.EnumSymbolBody,
): t.EnumDeclaration {
  return {
    type: TYPE,
    id,
    body,
  };
}

export function isEnumDeclaration(
  node: t.Node | null | undefined,
): node is t.EnumDeclaration {
  return is(TYPE, node);
}

export function assertEnumDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.EnumDeclaration {
  assert(TYPE, node);
}

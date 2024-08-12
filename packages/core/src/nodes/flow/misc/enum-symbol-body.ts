import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumSymbolBody';

export function enumSymbolBody(
  members: t.EnumDefaultedMember[],
): t.EnumSymbolBody {
  return {
    type: TYPE,
    members,
    hasUnknownMembers: false,
  };
}

export function isEnumSymbolBody(
  node: t.Node | null | undefined,
): node is t.EnumSymbolBody {
  return is(TYPE, node);
}

export function assertEnumSymbolBody(
  node: t.Node | null | undefined,
): asserts node is t.EnumSymbolBody {
  assert(TYPE, node);
}

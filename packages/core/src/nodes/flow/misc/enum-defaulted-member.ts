import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumDefaultedMember';

export function enumDefaultedMember(id: t.Identifier): t.EnumDefaultedMember {
  return {
    type: TYPE,
    id,
  };
}

export function isEnumDefaultedMember(
  node: t.Node | null | undefined,
): node is t.EnumDefaultedMember {
  return is(TYPE, node);
}

export function assertEnumDefaultedMember(
  node: t.Node | null | undefined,
): asserts node is t.EnumDefaultedMember {
  assert(TYPE, node);
}

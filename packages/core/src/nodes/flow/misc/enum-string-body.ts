import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumStringBody';

export function enumStringBody(
  members: Array<t.EnumStringMember | t.EnumDefaultedMember>,
): t.EnumStringBody {
  return {
    type: TYPE,
    members,
    explicitType: false,
    hasUnknownMembers: false,
  };
}

export function isEnumStringBody(
  node: t.Node | null | undefined,
): node is t.EnumStringBody {
  return is(TYPE, node);
}

export function assertEnumStringBody(
  node: t.Node | null | undefined,
): asserts node is t.EnumStringBody {
  assert(TYPE, node);
}

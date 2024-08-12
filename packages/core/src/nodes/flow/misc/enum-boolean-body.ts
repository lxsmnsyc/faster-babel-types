import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumBooleanBody';

export function enumBooleanBody(
  members: t.EnumBooleanMember[],
): t.EnumBooleanBody {
  return {
    type: TYPE,
    members,
    explicitType: false,
    hasUnknownMembers: false,
  };
}

export function isEnumBooleanBody(
  node: t.Node | null | undefined,
): node is t.EnumBooleanBody {
  return is(TYPE, node);
}

export function assertEnumBooleanBody(
  node: t.Node | null | undefined,
): asserts node is t.EnumBooleanBody {
  assert(TYPE, node);
}

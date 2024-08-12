import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumNumberBody';

export function enumNumberBody(
  members: t.EnumNumberMember[],
): t.EnumNumberBody {
  return {
    type: TYPE,
    members,
    explicitType: false,
    hasUnknownMembers: false,
  };
}

export function isEnumNumberBody(
  node: t.Node | null | undefined,
): node is t.EnumNumberBody {
  return is(TYPE, node);
}

export function assertEnumNumberBody(
  node: t.Node | null | undefined,
): asserts node is t.EnumNumberBody {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumStringMember';

export function enumStringMember(
  id: t.Identifier,
  init: t.StringLiteral,
): t.EnumStringMember {
  return {
    type: TYPE,
    id,
    init,
  };
}

export function isEnumStringMember(
  node: t.Node | null | undefined,
): node is t.EnumStringMember {
  return is(TYPE, node);
}

export function assertEnumStringMember(
  node: t.Node | null | undefined,
): asserts node is t.EnumStringMember {
  assert(TYPE, node);
}

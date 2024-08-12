import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumBooleanMember';

export function enumBooleanMember(id: t.Identifier): t.EnumBooleanMember {
  return {
    type: TYPE,
    id,
    init: null as any,
  };
}

export function isEnumBooleanMember(
  node: t.Node | null | undefined,
): node is t.EnumBooleanMember {
  return is(TYPE, node);
}

export function assertEnumBooleanMember(
  node: t.Node | null | undefined,
): asserts node is t.EnumBooleanMember {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EnumNumberMember';

export function enumNumberMember(
  id: t.Identifier,
  init: t.NumericLiteral,
): t.EnumNumberMember {
  return {
    type: TYPE,
    id,
    init,
  };
}

export function isEnumNumberMember(
  node: t.Node | null | undefined,
): node is t.EnumNumberMember {
  return is(TYPE, node);
}

export function assertEnumNumberMember(
  node: t.Node | null | undefined,
): asserts node is t.EnumNumberMember {
  assert(TYPE, node);
}

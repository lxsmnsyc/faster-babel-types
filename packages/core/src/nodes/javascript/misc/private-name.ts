import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'PrivateName';

export function privateName(id: t.Identifier): t.PrivateName {
  return {
    type: TYPE,
    id,
  };
}

export function isPrivateName(
  node: t.Node | null | undefined,
): node is t.PrivateName {
  return is(TYPE, node);
}

export function assertPrivateName(
  node: t.Node | null | undefined,
): asserts node is t.PrivateName {
  assert(TYPE, node);
}

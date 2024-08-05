import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'NullLiteral';

export function nullLiteral(): t.NullLiteral {
  return {
    type: TYPE,
  };
}

export function isNullLiteral(
  node: t.Node | null | undefined,
): node is t.NullLiteral {
  return is(TYPE, node);
}

export function assertNullLiteral(
  node: t.Node | null | undefined,
): asserts node is t.NullLiteral {
  assert(TYPE, node);
}

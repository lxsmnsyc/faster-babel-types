import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSUnknownKeyword';

export function tsUnknownKeyword(): t.TSUnknownKeyword {
  return {
    type: TYPE,
  };
}

export function isTSUnknownKeyword(
  node: t.Node | null | undefined,
): node is t.TSUnknownKeyword {
  return is(TYPE, node);
}

export function assertTSUnknownKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSUnknownKeyword {
  assert(TYPE, node);
}

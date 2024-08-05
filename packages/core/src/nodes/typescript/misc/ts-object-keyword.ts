import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSObjectKeyword';

export function tsObjectKeyword(): t.TSObjectKeyword {
  return {
    type: TYPE,
  };
}

export function isTSObjectKeyword(
  node: t.Node | null | undefined,
): node is t.TSObjectKeyword {
  return is(TYPE, node);
}

export function assertTSObjectKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSObjectKeyword {
  assert(TYPE, node);
}

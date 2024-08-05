import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSIntrinsicKeyword';

export function tsIntrinsicKeyword(): t.TSIntrinsicKeyword {
  return {
    type: TYPE,
  };
}

export function isTSIntrinsicKeyword(
  node: t.Node | null | undefined,
): node is t.TSIntrinsicKeyword {
  return is(TYPE, node);
}

export function assertTSIntrinsicKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSIntrinsicKeyword {
  assert(TYPE, node);
}

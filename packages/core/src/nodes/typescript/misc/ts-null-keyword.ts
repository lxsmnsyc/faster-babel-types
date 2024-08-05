import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSNullKeyword';

export function tsNullKeyword(): t.TSNullKeyword {
  return {
    type: TYPE,
  };
}

export function isTSNullKeyword(
  node: t.Node | null | undefined,
): node is t.TSNullKeyword {
  return is(TYPE, node);
}

export function assertTSNullKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSNullKeyword {
  assert(TYPE, node);
}

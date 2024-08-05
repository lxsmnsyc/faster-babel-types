import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSNeverKeyword';

export function tsNeverKeyword(): t.TSNeverKeyword {
  return {
    type: TYPE,
  };
}

export function isTSNeverKeyword(
  node: t.Node | null | undefined,
): node is t.TSNeverKeyword {
  return is(TYPE, node);
}

export function assertTSNeverKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSNeverKeyword {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSBigIntKeyword';

export function tsBigIntKeyword(): t.TSBigIntKeyword {
  return {
    type: TYPE,
  };
}

export function isTSBigIntKeyword(
  node: t.Node | null | undefined,
): node is t.TSBigIntKeyword {
  return is(TYPE, node);
}

export function assertTSBigIntKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSBigIntKeyword {
  assert(TYPE, node);
}

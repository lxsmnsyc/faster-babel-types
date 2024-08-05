import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSBooleanKeyword';

export function tsBooleanKeyword(): t.TSBooleanKeyword {
  return {
    type: TYPE,
  };
}

export function isTSBooleanKeyword(
  node: t.Node | null | undefined,
): node is t.TSBooleanKeyword {
  return is(TYPE, node);
}

export function assertTSBooleanKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSBooleanKeyword {
  assert(TYPE, node);
}

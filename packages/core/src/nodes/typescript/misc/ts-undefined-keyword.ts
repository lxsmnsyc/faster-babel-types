import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSUndefinedKeyword';

export function tsUndefinedKeyword(): t.TSUndefinedKeyword {
  return {
    type: TYPE,
  };
}

export function isTSUndefinedKeyword(
  node: t.Node | null | undefined,
): node is t.TSUndefinedKeyword {
  return is(TYPE, node);
}

export function assertTSUndefinedKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSUndefinedKeyword {
  assert(TYPE, node);
}

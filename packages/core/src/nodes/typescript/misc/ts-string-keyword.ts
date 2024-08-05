import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSStringKeyword';

export function tsStringKeyword(): t.TSStringKeyword {
  return {
    type: TYPE,
  };
}

export function isTSStringKeyword(
  node: t.Node | null | undefined,
): node is t.TSStringKeyword {
  return is(TYPE, node);
}

export function assertTSStringKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSStringKeyword {
  assert(TYPE, node);
}

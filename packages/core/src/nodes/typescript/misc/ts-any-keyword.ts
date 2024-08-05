import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSAnyKeyword';

export function tsAnyKeyword(): t.TSAnyKeyword {
  return {
    type: TYPE,
  };
}

export function isTSAnyKeyword(
  node: t.Node | null | undefined,
): node is t.TSAnyKeyword {
  return is(TYPE, node);
}

export function assertTSAnyKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSAnyKeyword {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSSymbolKeyword';

export function tsSymbolKeyword(): t.TSSymbolKeyword {
  return {
    type: TYPE,
  };
}

export function isTSSymbolKeyword(
  node: t.Node | null | undefined,
): node is t.TSSymbolKeyword {
  return is(TYPE, node);
}

export function assertTSSymbolKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSSymbolKeyword {
  assert(TYPE, node);
}

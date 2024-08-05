import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSVoidKeyword';

export function tsVoidKeyword(): t.TSVoidKeyword {
  return {
    type: TYPE,
  };
}

export function isTSVoidKeyword(
  node: t.Node | null | undefined,
): node is t.TSVoidKeyword {
  return is(TYPE, node);
}

export function assertTSVoidKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSVoidKeyword {
  assert(TYPE, node);
}

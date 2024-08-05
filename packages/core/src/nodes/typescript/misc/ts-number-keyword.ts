import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSNumberKeyword';

export function tsNumberKeyword(): t.TSNumberKeyword {
  return {
    type: TYPE,
  };
}

export function isTSNumberKeyword(
  node: t.Node | null | undefined,
): node is t.TSNumberKeyword {
  return is(TYPE, node);
}

export function assertTSNumberKeyword(
  node: t.Node | null | undefined,
): asserts node is t.TSNumberKeyword {
  assert(TYPE, node);
}

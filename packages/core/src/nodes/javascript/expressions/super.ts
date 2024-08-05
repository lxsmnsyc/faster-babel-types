import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'Super';

export function _super(): t.Super {
  return {
    type: TYPE,
  };
}

export function isSuper(node: t.Node | null | undefined): node is t.Super {
  return is(TYPE, node);
}

export function assertSuper(
  node: t.Node | null | undefined,
): asserts node is t.Super {
  assert(TYPE, node);
}

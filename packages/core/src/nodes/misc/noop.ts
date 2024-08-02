import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'Noop';

export function noop(): t.Noop {
  return {
    type: TYPE,
  };
}

export function isNoop(
  node: t.Node | null | undefined,
): node is t.Noop {
  return is(TYPE, node);
}

export function assertNoop(
  node: t.Node | null | undefined,
): asserts node is t.Noop {
  assert(TYPE, node);
}

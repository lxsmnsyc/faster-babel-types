import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'EmptyStatement';

export function emptyStatement(): t.EmptyStatement {
  return {
    type: TYPE,
  };
}

export function isEmptyStatement(
  node: t.Node | null | undefined,
): node is t.EmptyStatement {
  return is(TYPE, node);
}

export function assertEmptyStatement(
  node: t.Node | null | undefined,
): asserts node is t.EmptyStatement {
  assert(TYPE, node);
}

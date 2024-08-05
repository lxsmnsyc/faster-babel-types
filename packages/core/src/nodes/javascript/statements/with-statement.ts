import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'WithStatement';

export function withStatement(
  object: t.Expression,
  body: t.Statement,
): t.WithStatement {
  return {
    type: TYPE,
    object,
    body,
  };
}

export function isWithStatement(
  node: t.Node | null | undefined,
): node is t.WithStatement {
  return is(TYPE, node);
}

export function assertWithStatement(
  node: t.Node | null | undefined,
): asserts node is t.WithStatement {
  assert(TYPE, node);
}

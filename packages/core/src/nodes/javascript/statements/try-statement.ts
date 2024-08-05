import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TryStatement';

export function tryStatement(
  block: t.BlockStatement,
  handler: t.CatchClause | null | undefined = null,
  finalizer: t.BlockStatement | null | undefined = null,
): t.TryStatement {
  return {
    type: TYPE,
    block,
    handler,
    finalizer,
  };
}

export function isTryStatement(
  node: t.Node | null | undefined,
): node is t.TryStatement {
  return is(TYPE, node);
}

export function assertTryStatement(
  node: t.Node | null | undefined,
): asserts node is t.TryStatement {
  assert(TYPE, node);
}

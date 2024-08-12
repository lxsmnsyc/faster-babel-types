import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'CatchClause';

export function catchClause(
  param: t.Identifier | t.ArrayPattern | t.ObjectPattern | null | undefined,
  body: t.BlockStatement,
): t.CatchClause {
  return {
    type: TYPE,
    param,
    body,
  };
}

export function isCatchClause(
  node: t.Node | null | undefined,
): node is t.CatchClause {
  return is(TYPE, node);
}

export function assertCatchClause(
  node: t.Node | null | undefined,
): asserts node is t.CatchClause {
  assert(TYPE, node);
}

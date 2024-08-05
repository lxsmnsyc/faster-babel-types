import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ForOfStatement';

export function forOfStatement(
  left: t.VariableDeclaration | t.LVal,
  right: t.Expression,
  body: t.Statement,
  isAwait: boolean,
): t.ForOfStatement {
  return {
    type: TYPE,
    left,
    right,
    body,
    await: isAwait,
  };
}

export function isForOfStatement(
  node: t.Node | null | undefined,
): node is t.ForOfStatement {
  return is(TYPE, node);
}

export function assertForOfStatement(
  node: t.Node | null | undefined,
): asserts node is t.ForOfStatement {
  assert(TYPE, node);
}

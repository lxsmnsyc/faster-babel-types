import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ForInStatement';

export function forInStatement(
  left: t.VariableDeclaration | t.LVal,
  right: t.Expression,
  body: t.Statement,
): t.ForInStatement {
  return {
    type: TYPE,
    left,
    right,
    body,
  };
}

export function isForInStatement(
  node: t.Node | null | undefined,
): node is t.ForInStatement {
  return is(TYPE, node);
}

export function assertForInStatement(
  node: t.Node | null | undefined,
): asserts node is t.ForInStatement {
  assert(TYPE, node);
}

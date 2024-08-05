import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ForStatement';

export function forStatement(
  init: t.VariableDeclaration | t.Expression | null | undefined,
  test: t.Expression | null | undefined,
  update: t.Expression | null | undefined,
  body: t.Statement,
): t.ForStatement {
  return {
    type: TYPE,
    init,
    test,
    update,
    body,
  };
}

export function isForStatement(
  node: t.Node | null | undefined,
): node is t.ForStatement {
  return is(TYPE, node);
}

export function assertForStatement(
  node: t.Node | null | undefined,
): asserts node is t.ForStatement {
  assert(TYPE, node);
}

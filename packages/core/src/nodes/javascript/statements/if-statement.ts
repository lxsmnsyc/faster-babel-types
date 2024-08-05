import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'IfStatement';

export function ifStatement(
  test: t.Expression,
  consequent: t.Statement,
  alternate: t.Statement | null | undefined = null,
): t.IfStatement {
  return {
    type: TYPE,
    test,
    consequent,
    alternate,
  };
}

export function isIfStatement(
  node: t.Node | null | undefined,
): node is t.IfStatement {
  return is(TYPE, node);
}

export function assertIfStatement(
  node: t.Node | null | undefined,
): asserts node is t.IfStatement {
  assert(TYPE, node);
}

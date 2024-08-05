import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'BindExpression';

export function bindExpression(
  object: t.Expression,
  callee: t.Expression,
): t.BindExpression {
  return {
    type: TYPE,
    object,
    callee,
  };
}

export function isBindExpression(
  node: t.Node | null | undefined,
): node is t.BindExpression {
  return is(TYPE, node);
}

export function assertBindExpression(
  node: t.Node | null | undefined,
): asserts node is t.BindExpression {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'AwaitExpression';

export function awaitExpression(argument: t.Expression): t.AwaitExpression {
  return {
    type: TYPE,
    argument,
  };
}

export function isAwaitExpression(
  node: t.Node | null | undefined,
): node is t.AwaitExpression {
  return is(TYPE, node);
}

export function assertAwaitExpression(
  node: t.Node | null | undefined,
): asserts node is t.AwaitExpression {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'YieldExpression';

export function yieldExpression(
  argument: t.Expression | null | undefined = null,
  delegate = false,
): t.YieldExpression {
  return {
    type: TYPE,
    argument,
    delegate,
  };
}

export function isYieldExpression(
  node: t.Node | null | undefined,
): node is t.YieldExpression {
  return is(TYPE, node);
}

export function assertYieldExpression(
  node: t.Node | null | undefined,
): asserts node is t.YieldExpression {
  assert(TYPE, node);
}

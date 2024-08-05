import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ArrowFunctionExpression';

export function arrowFunctionExpression(
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  body: t.BlockStatement | t.Expression,
  async = false,
): t.ArrowFunctionExpression {
  return {
    type: TYPE,
    params,
    body,
    async,
    expression: null as unknown as boolean, // ??? originally they use null
  };
}

export function isArrowFunctionExpression(
  node: t.Node | null | undefined,
): node is t.ArrowFunctionExpression {
  return is(TYPE, node);
}

export function assertArrowFunctionExpression(
  node: t.Node | null | undefined,
): asserts node is t.ArrowFunctionExpression {
  assert(TYPE, node);
}

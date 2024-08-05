import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'FunctionExpression';

export function functionExpression(
  id: t.Identifier | null | undefined,
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  body: t.BlockStatement,
  generator = false,
  async = false,
): t.FunctionExpression {
  return {
    type: TYPE,
    id,
    params,
    body,
    generator,
    async,
  };
}

export function isFunctionExpression(
  node: t.Node | null | undefined,
): node is t.FunctionExpression {
  return is(TYPE, node);
}

export function assertFunctionExpression(
  node: t.Node | null | undefined,
): asserts node is t.FunctionExpression {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'DoExpression';

export function doExpressiondoExpression(
  body: t.BlockStatement,
  async: boolean,
): t.DoExpression {
  return {
    type: TYPE,
    body,
    async,
  };
}

export function isDoExpression(
  node: t.Node | null | undefined,
): node is t.DoExpression {
  return is(TYPE, node);
}

export function assertDoExpression(
  node: t.Node | null | undefined,
): asserts node is t.DoExpression {
  assert(TYPE, node);
}

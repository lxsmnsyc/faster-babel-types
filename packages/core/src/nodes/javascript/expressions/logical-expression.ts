import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'LogicalExpression';

export type LogicalExpressionOperator = '||' | '&&' | '??';

export function logicalExpression(
  operator: LogicalExpressionOperator,
  left: t.Expression,
  right: t.Expression,
): t.LogicalExpression {
  return {
    type: TYPE,
    operator,
    left,
    right,
  };
}

export function isLogicalExpression(
  node: t.Node | null | undefined,
): node is t.LogicalExpression {
  return is(TYPE, node);
}

export function assertLogicalExpression(
  node: t.Node | null | undefined,
): asserts node is t.LogicalExpression {
  assert(TYPE, node);
}

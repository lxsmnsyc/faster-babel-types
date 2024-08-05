import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'UpdateExpression';

export type UpdateExpressionOperator = '++' | '--';

export function updateExpression(
  operator: UpdateExpressionOperator,
  argument: t.Expression,
  prefix = false,
): t.UpdateExpression {
  return {
    type: TYPE,
    operator,
    argument,
    prefix,
  };
}

export function isUpdateExpression(
  node: t.Node | null | undefined,
): node is t.UpdateExpression {
  return is(TYPE, node);
}

export function assertUpdateExpression(
  node: t.Node | null | undefined,
): asserts node is t.UpdateExpression {
  assert(TYPE, node);
}

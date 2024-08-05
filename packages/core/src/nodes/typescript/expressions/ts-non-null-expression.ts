import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSNonNullExpression';

export function tsNonNullExpression(
  expression: t.Expression,
): t.TSNonNullExpression {
  return {
    type: TYPE,
    expression,
  };
}

export function isTSNonNullExpression(
  node: t.Node | null | undefined,
): node is t.TSNonNullExpression {
  return is(TYPE, node);
}

export function assertTSNonNullExpression(
  node: t.Node | null | undefined,
): asserts node is t.TSNonNullExpression {
  assert(TYPE, node);
}

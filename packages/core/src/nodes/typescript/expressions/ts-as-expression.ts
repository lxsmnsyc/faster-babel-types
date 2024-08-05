import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSAsExpression';

export function tsAsExpression(
  expression: t.Expression,
  typeAnnotation: t.TSType,
): t.TSAsExpression {
  return {
    type: TYPE,
    expression,
    typeAnnotation,
  };
}

export function isTSAsExpression(
  node: t.Node | null | undefined,
): node is t.TSAsExpression {
  return is(TYPE, node);
}

export function assertTSAsExpression(
  node: t.Node | null | undefined,
): asserts node is t.TSAsExpression {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ConditionalExpression';

export function conditionalExpression(
  test: t.Expression,
  consequent: t.Expression,
  alternate: t.Expression,
): t.ConditionalExpression {
  return {
    type: TYPE,
    test,
    consequent,
    alternate,
  };
}

export function isConditionalExpression(
  node: t.Node | null | undefined,
): node is t.ConditionalExpression {
  return is(TYPE, node);
}

export function assertConditionalExpression(
  node: t.Node | null | undefined,
): asserts node is t.ConditionalExpression {
  assert(TYPE, node);
}

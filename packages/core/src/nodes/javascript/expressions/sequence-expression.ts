import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'SequenceExpression';

export function sequenceExpression(
  expressions: t.Expression[],
): t.SequenceExpression {
  return {
    type: TYPE,
    expressions,
  };
}

export function isSequenceExpression(
  node: t.Node | null | undefined,
): node is t.SequenceExpression {
  return is(TYPE, node);
}

export function assertSequenceExpression(
  node: t.Node | null | undefined,
): asserts node is t.SequenceExpression {
  assert(TYPE, node);
}

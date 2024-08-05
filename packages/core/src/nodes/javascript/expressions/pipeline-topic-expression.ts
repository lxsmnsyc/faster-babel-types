import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'PipelineTopicExpression';

export function pipelineTopicExpression(
  expression: t.Expression,
): t.PipelineTopicExpression {
  return {
    type: TYPE,
    expression,
  };
}

export function isPipelineTopicExpression(
  node: t.Node | null | undefined,
): node is t.PipelineTopicExpression {
  return is(TYPE, node);
}

export function assertPipelineTopicExpression(
  node: t.Node | null | undefined,
): asserts node is t.PipelineTopicExpression {
  assert(TYPE, node);
}

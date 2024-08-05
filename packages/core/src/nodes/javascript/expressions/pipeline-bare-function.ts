import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'PipelineBareFunction';

export function pipelineBareFunction(
  callee: t.Expression,
): t.PipelineBareFunction {
  return {
    type: TYPE,
    callee,
  };
}

export function isPipelineBareFunction(
  node: t.Node | null | undefined,
): node is t.PipelineBareFunction {
  return is(TYPE, node);
}

export function assertPipelineBareFunction(
  node: t.Node | null | undefined,
): asserts node is t.PipelineBareFunction {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'PipelinePrimaryTopicReference';

export function pipelinePrimaryTopicReference(): t.PipelinePrimaryTopicReference {
  return {
    type: TYPE,
  };
}

export function isPipelinePrimaryTopicReference(
  node: t.Node | null | undefined,
): node is t.PipelinePrimaryTopicReference {
  return is(TYPE, node);
}

export function assertPipelinePrimaryTopicReference(
  node: t.Node | null | undefined,
): asserts node is t.PipelinePrimaryTopicReference {
  assert(TYPE, node);
}

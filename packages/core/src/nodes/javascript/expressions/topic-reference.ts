import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TopicReference';

export function topicReference(): t.TopicReference {
  return {
    type: TYPE,
  };
}

export function isTopicReference(
  node: t.Node | null | undefined,
): node is t.TopicReference {
  return is(TYPE, node);
}

export function assertTopicReference(
  node: t.Node | null | undefined,
): asserts node is t.TopicReference {
  assert(TYPE, node);
}

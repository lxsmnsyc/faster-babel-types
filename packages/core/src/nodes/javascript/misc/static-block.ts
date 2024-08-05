import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'StaticBlock';

export function staticBlock(body: t.Statement[]): t.StaticBlock {
  return {
    type: TYPE,
    body,
  };
}

export function isStaticBlock(
  node: t.Node | null | undefined,
): node is t.StaticBlock {
  return is(TYPE, node);
}

export function assertStaticBlock(
  node: t.Node | null | undefined,
): asserts node is t.StaticBlock {
  assert(TYPE, node);
}

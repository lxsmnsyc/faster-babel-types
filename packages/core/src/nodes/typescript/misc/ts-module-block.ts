import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSModuleBlock';

export function tsModuleBlock(body: t.Statement[]): t.TSModuleBlock {
  return {
    type: TYPE,
    body,
  };
}

export function isTSModuleBlock(
  node: t.Node | null | undefined,
): node is t.TSModuleBlock {
  return is(TYPE, node);
}

export function assertTSModuleBlock(
  node: t.Node | null | undefined,
): asserts node is t.TSModuleBlock {
  assert(TYPE, node);
}

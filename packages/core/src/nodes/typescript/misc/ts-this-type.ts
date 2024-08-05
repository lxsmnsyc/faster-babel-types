import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSThisType';

export function tsThisType(): t.TSThisType {
  return {
    type: TYPE,
  };
}

export function isTSThisType(
  node: t.Node | null | undefined,
): node is t.TSThisType {
  return is(TYPE, node);
}

export function assertTSThisType(
  node: t.Node | null | undefined,
): asserts node is t.TSThisType {
  assert(TYPE, node);
}

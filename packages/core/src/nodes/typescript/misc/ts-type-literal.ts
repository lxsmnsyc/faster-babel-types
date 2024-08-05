import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeLiteral';

export function tsTypeLiteral(members: t.TSTypeElement[]): t.TSTypeLiteral {
  return {
    type: TYPE,
    members,
  };
}

export function isTSTypeLiteral(
  node: t.Node | null | undefined,
): node is t.TSTypeLiteral {
  return is(TYPE, node);
}

export function assertTSTypeLiteral(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeLiteral {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DirectiveLiteral';

export function directiveLiteral(value: string): t.DirectiveLiteral {
  return {
    type: TYPE,
    value,
  };
}

export function isDirectiveLiteral(
  node: t.Node | null | undefined,
): node is t.DirectiveLiteral {
  return is(TYPE, node);
}

export function assertDirectiveLiteral(
  node: t.Node | null | undefined,
): asserts node is t.DirectiveLiteral {
  assert(TYPE, node);
}

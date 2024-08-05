import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'BreakStatement';

export function breakStatement(
  label: t.Identifier | null | undefined = null,
): t.BreakStatement {
  return {
    type: TYPE,
    label,
  };
}

export function isBreakStatement(
  node: t.Node | null | undefined,
): node is t.BreakStatement {
  return is(TYPE, node);
}

export function assertBreakStatement(
  node: t.Node | null | undefined,
): asserts node is t.BreakStatement {
  assert(TYPE, node);
}

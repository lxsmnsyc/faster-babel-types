import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DebuggerStatement';

export function debuggerStatement(): t.DebuggerStatement {
  return {
    type: TYPE,
  };
}

export function isDebuggerStatement(
  node: t.Node | null | undefined,
): node is t.DebuggerStatement {
  return is(TYPE, node);
}

export function assertDebuggerStatement(
  node: t.Node | null | undefined,
): asserts node is t.DebuggerStatement {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ThrowStatement';

export function throwStatement(argument: t.Expression): t.ThrowStatement {
  return {
    type: TYPE,
    argument,
  };
}

export function isThrowStatement(
  node: t.Node | null | undefined,
): node is t.ThrowStatement {
  return is(TYPE, node);
}

export function assertThrowStatement(
  node: t.Node | null | undefined,
): asserts node is t.ThrowStatement {
  assert(TYPE, node);
}

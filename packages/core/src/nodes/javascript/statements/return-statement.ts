import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ReturnStatement';

export function returnStatement(
  argument: t.Expression | null | undefined = null,
): t.ReturnStatement {
  return {
    type: TYPE,
    argument,
  };
}

export function isReturnStatement(
  node: t.Node | null | undefined,
): node is t.ReturnStatement {
  return is(TYPE, node);
}

export function assertReturnStatement(
  node: t.Node | null | undefined,
): asserts node is t.ReturnStatement {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ContinueStatement';

export function continueStatement(
  label: t.Identifier | null | undefined = null,
): t.ContinueStatement {
  return {
    type: TYPE,
    label,
  };
}

export function isContinueStatement(
  node: t.Node | null | undefined,
): node is t.ContinueStatement {
  return is(TYPE, node);
}

export function assertContinueStatement(
  node: t.Node | null | undefined,
): asserts node is t.ContinueStatement {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'SwitchStatement';

export function switchStatement(
  discriminant: t.Expression,
  cases: t.SwitchCase[],
): t.SwitchStatement {
  return {
    type: TYPE,
    discriminant,
    cases,
  };
}

export function isSwitchStatement(
  node: t.Node | null | undefined,
): node is t.SwitchStatement {
  return is(TYPE, node);
}

export function assertSwitchStatement(
  node: t.Node | null | undefined,
): asserts node is t.SwitchStatement {
  assert(TYPE, node);
}

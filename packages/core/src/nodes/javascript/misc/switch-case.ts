import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'SwitchCase';

export function switchCase(
  test: t.Expression | null | undefined,
  consequent: t.Statement[],
): t.SwitchCase {
  return {
    type: TYPE,
    test,
    consequent,
  };
}

export function isSwitchCase(
  node: t.Node | null | undefined,
): node is t.SwitchCase {
  return is(TYPE, node);
}

export function assertSwitchCase(
  node: t.Node | null | undefined,
): asserts node is t.SwitchCase {
  assert(TYPE, node);
}

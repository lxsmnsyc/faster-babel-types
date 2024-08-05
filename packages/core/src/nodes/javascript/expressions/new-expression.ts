import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'NewExpression';

export function newExpression(
  callee: t.Expression | t.V8IntrinsicIdentifier,
  args: Array<t.Expression | t.SpreadElement | t.ArgumentPlaceholder>,
): t.NewExpression {
  return {
    type: TYPE,
    callee,
    arguments: args,
  };
}

export function isNewExpression(
  node: t.Node | null | undefined,
): node is t.NewExpression {
  return is(TYPE, node);
}

export function assertNewExpression(
  node: t.Node | null | undefined,
): asserts node is t.NewExpression {
  assert(TYPE, node);
}

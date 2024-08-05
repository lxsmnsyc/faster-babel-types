import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'CallExpression';

export function callExpression(
  callee: t.Expression | t.V8IntrinsicIdentifier,
  args: Array<t.Expression | t.SpreadElement | t.ArgumentPlaceholder>,
): t.CallExpression {
  return {
    type: TYPE,
    callee,
    arguments: args,
  };
}

export function isCallExpression(
  node: t.Node | null | undefined,
): node is t.CallExpression {
  return is(TYPE, node);
}

export function assertCallExpression(
  node: t.Node | null | undefined,
): asserts node is t.CallExpression {
  assert(TYPE, node);
}

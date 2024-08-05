import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'OptionalCallExpression';

export function optionalCallExpression(
  callee: t.Expression,
  args: Array<t.Expression | t.SpreadElement | t.ArgumentPlaceholder>,
  optional: boolean,
): t.OptionalCallExpression {
  return {
    type: TYPE,
    callee,
    arguments: args,
    optional,
  };
}

export function isOptionalCallExpression(
  node: t.Node | null | undefined,
): node is t.OptionalCallExpression {
  return is(TYPE, node);
}

export function assertOptionalCallExpression(
  node: t.Node | null | undefined,
): asserts node is t.OptionalCallExpression {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'AssignmentExpression';

export function assignmentExpression(
  operator: string,
  left: t.LVal | t.OptionalMemberExpression,
  right: t.Expression,
): t.AssignmentExpression {
  return {
    type: TYPE,
    operator,
    left,
    right,
  };
}

export function isAssignmentExpression(
  node: t.Node | null | undefined,
): node is t.AssignmentExpression {
  return is(TYPE, node);
}

export function assertAssignmentExpression(
  node: t.Node | null | undefined,
): asserts node is t.AssignmentExpression {
  assert(TYPE, node);
}

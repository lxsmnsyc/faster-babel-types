import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'AssignmentPattern';

export function assignmentPattern(
  left:
    | t.Identifier
    | t.ObjectPattern
    | t.ArrayPattern
    | t.MemberExpression
    | t.TSAsExpression
    | t.TSSatisfiesExpression
    | t.TSTypeAssertion
    | t.TSNonNullExpression,
  right: t.Expression,
): t.AssignmentPattern {
  return {
    type: TYPE,
    left,
    right,
  };
}

export function isAssignmentPattern(
  node: t.Node | null | undefined,
): node is t.AssignmentPattern {
  return is(TYPE, node);
}

export function assertAssignmentPattern(
  node: t.Node | null | undefined,
): asserts node is t.AssignmentPattern {
  assert(TYPE, node);
}

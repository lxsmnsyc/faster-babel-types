import type * as t from '@babel/types';
import { is } from '../../is';

const TYPE = 'AssignmentExpression';

export function AssignmentExpression(
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

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'MemberExpression';

export function memberExpression(
  object: t.Expression,
  property: t.Expression | t.Identifier | t.PrivateName,
  computed = false,
  optional = false,
): t.MemberExpression {
  return {
    type: TYPE,
    object,
    property,
    computed,
    optional,
  };
}

export function isMemberExpression(
  node: t.Node | null | undefined,
): node is t.MemberExpression {
  return is(TYPE, node);
}

export function assertMemberExpression(
  node: t.Node | null | undefined,
): asserts node is t.MemberExpression {
  assert(TYPE, node);
}

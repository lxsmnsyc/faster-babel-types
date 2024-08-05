import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'OptionalMemberExpression';

export function optionalMemberExpression(
  object: t.Expression,
  property: t.Expression | t.Identifier,
  computed = false,
  optional = false,
): t.OptionalMemberExpression {
  return {
    type: TYPE,
    object,
    property,
    computed,
    optional,
  };
}

export function isOptionalMemberExpression(
  node: t.Node | null | undefined,
): node is t.OptionalMemberExpression {
  return is(TYPE, node);
}

export function assertOptionalMemberExpression(
  node: t.Node | null | undefined,
): asserts node is t.OptionalMemberExpression {
  assert(TYPE, node);
}

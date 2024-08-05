import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectProperty';

export function objectProperty(
  key:
    | t.Expression
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.DecimalLiteral
    | t.PrivateName,
  value: t.Expression | t.PatternLike,
  computed = false,
  shorthand = false,
  decorators: t.Decorator[] | null | undefined = null,
): t.ObjectProperty {
  return {
    type: TYPE,
    key,
    value,
    computed,
    shorthand,
    decorators,
  };
}

export function isObjectProperty(
  node: t.Node | null | undefined,
): node is t.ObjectProperty {
  return is(TYPE, node);
}

export function assertObjectProperty(
  node: t.Node | null | undefined,
): asserts node is t.ObjectProperty {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ClassAccessorProperty';

export function classAccessorProperty(
  key:
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.Expression
    | t.PrivateName,
  value: t.Expression | null | undefined = null,
  typeAnnotation:
    | t.TypeAnnotation
    | t.TSTypeAnnotation
    | t.Noop
    | null
    | undefined = null,
  decorators: t.Decorator[] | null | undefined = null,
  computed = false,
  isStatic = false,
): t.ClassAccessorProperty {
  return {
    type: TYPE,
    key,
    value,
    typeAnnotation,
    decorators,
    computed,
    static: isStatic,
  };
}

export function isClassAccessorProperty(
  node: t.Node | null | undefined,
): node is t.ClassAccessorProperty {
  return is(TYPE, node);
}

export function assertClassAccessorProperty(
  node: t.Node | null | undefined,
): asserts node is t.ClassAccessorProperty {
  assert(TYPE, node);
}

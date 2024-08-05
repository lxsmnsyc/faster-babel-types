import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ClassProperty';

export function classProperty(
  key:
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.Expression,
  value?: t.Expression | null,
  typeAnnotation?: t.TypeAnnotation | t.TSTypeAnnotation | t.Noop | null,
  decorators?: t.Decorator[] | null,
  computed = false,
  isStatic = false,
): t.ClassProperty {
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

export function isClassProperty(
  node: t.Node | null | undefined,
): node is t.ClassProperty {
  return is(TYPE, node);
}

export function assertClassProperty(
  node: t.Node | null | undefined,
): asserts node is t.ClassProperty {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSDeclareMethod';

export function tsDeclareMethod(
  decorators: t.Decorator[] | null | undefined,
  key:
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.Expression,
  typeParameters: t.TSTypeParameterDeclaration | t.Noop | null | undefined,
  params: Array<
    t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
  >,
  returnType: t.TSTypeAnnotation | t.Noop | null | undefined = null,
): t.TSDeclareMethod {
  return {
    type: TYPE,
    decorators,
    key,
    typeParameters,
    params,
    returnType,
  };
}

export function isTSDeclareMethod(
  node: t.Node | null | undefined,
): node is t.TSDeclareMethod {
  return is(TYPE, node);
}

export function assertTSDeclareMethod(
  node: t.Node | null | undefined,
): asserts node is t.TSDeclareMethod {
  assert(TYPE, node);
}

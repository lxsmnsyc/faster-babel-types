import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSConstructorType';

export function tsConstructorType(
  typeParameters: t.TSTypeParameterDeclaration | null | undefined,
  parameters: Array<
    t.ArrayPattern | t.Identifier | t.ObjectPattern | t.RestElement
  >,
  typeAnnotation: t.TSTypeAnnotation | null | undefined = null,
): t.TSConstructorType {
  return {
    type: TYPE,
    typeParameters,
    parameters,
    typeAnnotation,
  };
}

export function isTSConstructorType(
  node: t.Node | null | undefined,
): node is t.TSConstructorType {
  return is(TYPE, node);
}

export function assertTSConstructorType(
  node: t.Node | null | undefined,
): asserts node is t.TSConstructorType {
  assert(TYPE, node);
}

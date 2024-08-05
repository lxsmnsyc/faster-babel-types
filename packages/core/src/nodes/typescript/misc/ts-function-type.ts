import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSFunctionType';

export function tsFunctionType(
  typeParameters: t.TSTypeParameterDeclaration | null | undefined,
  parameters: Array<
    t.ArrayPattern | t.Identifier | t.ObjectPattern | t.RestElement
  >,
  typeAnnotation: t.TSTypeAnnotation | null | undefined = null,
): t.TSFunctionType {
  return {
    type: TYPE,
    typeParameters,
    parameters,
    typeAnnotation,
  };
}

export function isTSFunctionType(
  node: t.Node | null | undefined,
): node is t.TSFunctionType {
  return is(TYPE, node);
}

export function assertTSFunctionType(
  node: t.Node | null | undefined,
): asserts node is t.TSFunctionType {
  assert(TYPE, node);
}

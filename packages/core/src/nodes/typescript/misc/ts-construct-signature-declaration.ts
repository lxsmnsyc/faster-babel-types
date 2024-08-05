import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSConstructSignatureDeclaration';

export function tsConstructSignatureDeclaration(
  typeParameters: t.TSTypeParameterDeclaration | null | undefined,
  parameters: Array<
    t.ArrayPattern | t.Identifier | t.ObjectPattern | t.RestElement
  >,
  typeAnnotation: t.TSTypeAnnotation | null | undefined = null,
): t.TSConstructSignatureDeclaration {
  return {
    type: TYPE,
    typeParameters,
    parameters,
    typeAnnotation,
  };
}

export function isTSConstructSignatureDeclaration(
  node: t.Node | null | undefined,
): node is t.TSConstructSignatureDeclaration {
  return is(TYPE, node);
}

export function assertTSConstructSignatureDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSConstructSignatureDeclaration {
  assert(TYPE, node);
}

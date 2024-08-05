import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSCallSignatureDeclaration';

export function tsCallSignatureDeclaration(
  typeParameters: t.TSTypeParameterDeclaration | null | undefined,
  parameters: Array<
    t.ArrayPattern | t.Identifier | t.ObjectPattern | t.RestElement
  >,
  typeAnnotation: t.TSTypeAnnotation | null | undefined = null,
): t.TSCallSignatureDeclaration {
  return {
    type: TYPE,
    typeParameters,
    parameters,
    typeAnnotation,
  };
}

export function isTSCallSignatureDeclaration(
  node: t.Node | null | undefined,
): node is t.TSCallSignatureDeclaration {
  return is(TYPE, node);
}

export function assertTSCallSignatureDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSCallSignatureDeclaration {
  assert(TYPE, node);
}

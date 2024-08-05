import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSMethodSignature';

export type TSMethodSignatureKind = 'get' | 'set' | 'method';

export function tsMethodSignature(
  key: t.Expression,
  typeParameters: t.TSTypeParameterDeclaration | null | undefined,
  parameters: Array<
    t.ArrayPattern | t.Identifier | t.ObjectPattern | t.RestElement
  >,
  typeAnnotation: t.TSTypeAnnotation | null | undefined = null,
  kind: TSMethodSignatureKind = 'method',
): t.TSMethodSignature {
  return {
    type: TYPE,
    key,
    typeParameters,
    parameters,
    typeAnnotation,
    kind,
  };
}

export function isTSMethodSignature(
  node: t.Node | null | undefined,
): node is t.TSMethodSignature {
  return is(TYPE, node);
}

export function assertTSMethodSignature(
  node: t.Node | null | undefined,
): asserts node is t.TSMethodSignature {
  assert(TYPE, node);
}

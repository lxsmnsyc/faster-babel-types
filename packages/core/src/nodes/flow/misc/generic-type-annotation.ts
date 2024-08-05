import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'GenericTypeAnnotation';

export function genericTypeAnnotation(
  id: t.Identifier | t.QualifiedTypeIdentifier,
  typeParameters: t.TypeParameterInstantiation | null | undefined = null,
): t.GenericTypeAnnotation {
  return {
    type: TYPE,
    id,
    typeParameters,
  };
}

export function isGenericTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.GenericTypeAnnotation {
  return is(TYPE, node);
}

export function assertGenericTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.GenericTypeAnnotation {
  assert(TYPE, node);
}

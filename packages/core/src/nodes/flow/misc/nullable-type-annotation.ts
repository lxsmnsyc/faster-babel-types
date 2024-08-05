import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'NullableTypeAnnotation';

export function nullableTypeAnnotation(
  typeAnnotation: t.FlowType,
): t.NullableTypeAnnotation {
  return {
    type: TYPE,
    typeAnnotation,
  };
}

export function isNullableTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.NullableTypeAnnotation {
  return is(TYPE, node);
}

export function assertNullableTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.NullableTypeAnnotation {
  assert(TYPE, node);
}

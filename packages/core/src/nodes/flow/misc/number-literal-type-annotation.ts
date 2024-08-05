import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'NumberLiteralTypeAnnotation';

export function numberLiteralTypeAnnotation(
  value: number,
): t.NumberLiteralTypeAnnotation {
  return {
    type: TYPE,
    value,
  };
}

export function isNumberLiteralTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.NumberLiteralTypeAnnotation {
  return is(TYPE, node);
}

export function assertNumberLiteralTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.NumberLiteralTypeAnnotation {
  assert(TYPE, node);
}

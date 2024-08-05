import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'BooleanLiteralTypeAnnotation';

export function booleanLiteralTypeAnnotation(
  value: boolean,
): t.BooleanLiteralTypeAnnotation {
  return {
    type: TYPE,
    value,
  };
}

export function isBooleanLiteralTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.BooleanLiteralTypeAnnotation {
  return is(TYPE, node);
}

export function assertBooleanLiteralTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.BooleanLiteralTypeAnnotation {
  assert(TYPE, node);
}

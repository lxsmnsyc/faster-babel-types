import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'StringLiteralTypeAnnotation';

export function stringLiteralTypeAnnotation(
  value: string,
): t.StringLiteralTypeAnnotation {
  return {
    type: TYPE,
    value,
  };
}

export function isStringLiteralTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.StringLiteralTypeAnnotation {
  return is(TYPE, node);
}

export function assertStringLiteralTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.StringLiteralTypeAnnotation {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'NullLiteralTypeAnnotation';

export function nullLiteralTypeAnnotation(): t.NullLiteralTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isNullLiteralTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.NullLiteralTypeAnnotation {
  return is(TYPE, node);
}

export function assertNullLiteralTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.NullLiteralTypeAnnotation {
  assert(TYPE, node);
}

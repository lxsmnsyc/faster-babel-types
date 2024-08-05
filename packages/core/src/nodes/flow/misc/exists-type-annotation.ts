import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ExistsTypeAnnotation';

export function existsTypeAnnotation(): t.ExistsTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isExistsTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.ExistsTypeAnnotation {
  return is(TYPE, node);
}

export function assertExistsTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.ExistsTypeAnnotation {
  assert(TYPE, node);
}

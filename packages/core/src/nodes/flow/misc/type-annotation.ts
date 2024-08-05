import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TypeAnnotation';

export function typeAnnotation(typeAnnotation: t.FlowType): t.TypeAnnotation {
  return {
    type: TYPE,
    typeAnnotation,
  };
}

export function isTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.TypeAnnotation {
  return is(TYPE, node);
}

export function assertTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.TypeAnnotation {
  assert(TYPE, node);
}

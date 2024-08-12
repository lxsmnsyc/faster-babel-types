import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TypeofTypeAnnotation';

export function typeofTypeAnnotation(
  argument: t.FlowType,
): t.TypeofTypeAnnotation {
  return {
    type: TYPE,
    argument,
  };
}

export function isTypeofTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.TypeofTypeAnnotation {
  return is(TYPE, node);
}

export function assertTypeofTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.TypeofTypeAnnotation {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TupleTypeAnnotation';

export function tupleTypeAnnotation(
  types: t.FlowType[],
): t.TupleTypeAnnotation {
  return {
    type: TYPE,
    types,
  };
}

export function isTupleTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.TupleTypeAnnotation {
  return is(TYPE, node);
}

export function assertTupleTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.TupleTypeAnnotation {
  assert(TYPE, node);
}

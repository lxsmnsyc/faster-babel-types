import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'UnionTypeAnnotation';

export function unionTypeAnnotation(
  types: t.FlowType[],
): t.UnionTypeAnnotation {
  return {
    type: TYPE,
    types,
  };
}

export function isUnionTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.UnionTypeAnnotation {
  return is(TYPE, node);
}

export function assertUnionTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.UnionTypeAnnotation {
  assert(TYPE, node);
}

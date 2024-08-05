import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTupleType';

export function tsTupleType(
  elementTypes: Array<t.TSType | t.TSNamedTupleMember>,
): t.TSTupleType {
  return {
    type: TYPE,
    elementTypes,
  };
}

export function isTSTupleType(
  node: t.Node | null | undefined,
): node is t.TSTupleType {
  return is(TYPE, node);
}

export function assertTSTupleType(
  node: t.Node | null | undefined,
): asserts node is t.TSTupleType {
  assert(TYPE, node);
}

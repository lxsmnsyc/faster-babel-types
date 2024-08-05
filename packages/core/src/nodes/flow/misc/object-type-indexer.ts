import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectTypeIndexer';

export function objectTypeIndexer(
  id: t.Identifier | null | undefined,
  key: t.FlowType,
  value: t.FlowType,
  variance: t.Variance | null = null,
): t.ObjectTypeIndexer {
  return {
    type: TYPE,
    id,
    key,
    value,
    variance,
    static: false,
  };
}

export function isObjectTypeIndexer(
  node: t.Node | null | undefined,
): node is t.ObjectTypeIndexer {
  return is(TYPE, node);
}

export function assertObjectTypeIndexer(
  node: t.Node | null | undefined,
): asserts node is t.ObjectTypeIndexer {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSQualifiedName';

export function tsQualifiedName(
  left: t.TSEntityName,
  right: t.Identifier,
): t.TSQualifiedName {
  return {
    type: TYPE,
    left,
    right,
  };
}

export function isTSQualifiedName(
  node: t.Node | null | undefined,
): node is t.TSQualifiedName {
  return is(TYPE, node);
}

export function assertTSQualifiedName(
  node: t.Node | null | undefined,
): asserts node is t.TSQualifiedName {
  assert(TYPE, node);
}

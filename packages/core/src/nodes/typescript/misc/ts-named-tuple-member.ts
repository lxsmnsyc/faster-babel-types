import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSNamedTupleMember';

export function tsNamedTupleMember(
  label: t.Identifier,
  elementType: t.TSType,
  optional = false,
): t.TSNamedTupleMember {
  return {
    type: TYPE,
    label,
    elementType,
    optional,
  };
}

export function isTSNamedTupleMember(
  node: t.Node | null | undefined,
): node is t.TSNamedTupleMember {
  return is(TYPE, node);
}

export function assertTSNamedTupleMember(
  node: t.Node | null | undefined,
): asserts node is t.TSNamedTupleMember {
  assert(TYPE, node);
}

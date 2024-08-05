import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectTypeSpreadProperty';

export function objectTypeSpreadProperty(
  argument: t.FlowType,
): t.ObjectTypeSpreadProperty {
  return {
    type: TYPE,
    argument,
  };
}

export function isObjectTypeSpreadProperty(
  node: t.Node | null | undefined,
): node is t.ObjectTypeSpreadProperty {
  return is(TYPE, node);
}

export function assertObjectTypeSpreadProperty(
  node: t.Node | null | undefined,
): asserts node is t.ObjectTypeSpreadProperty {
  assert(TYPE, node);
}

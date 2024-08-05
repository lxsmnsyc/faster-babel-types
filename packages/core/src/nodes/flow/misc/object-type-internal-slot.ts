import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectTypeInternalSlot';

export function objectTypeInternalSlot(
  id: t.Identifier,
  value: t.FlowType,
  optional: boolean,
  isStatic: boolean,
  method: boolean,
): t.ObjectTypeInternalSlot {
  return {
    type: TYPE,
    id,
    value,
    optional,
    static: isStatic,
    method,
  };
}

export function isObjectTypeInternalSlot(
  node: t.Node | null | undefined,
): node is t.ObjectTypeInternalSlot {
  return is(TYPE, node);
}

export function assertObjectTypeInternalSlot(
  node: t.Node | null | undefined,
): asserts node is t.ObjectTypeInternalSlot {
  assert(TYPE, node);
}

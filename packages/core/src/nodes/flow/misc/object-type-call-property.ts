import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectTypeCallProperty';

export function objectTypeCallProperty(
  value: t.FlowType,
): t.ObjectTypeCallProperty {
  return {
    type: TYPE,
    value,
    static: false,
  };
}

export function isObjectTypeCallProperty(
  node: t.Node | null | undefined,
): node is t.ObjectTypeCallProperty {
  return is(TYPE, node);
}

export function assertObjectTypeCallProperty(
  node: t.Node | null | undefined,
): asserts node is t.ObjectTypeCallProperty {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectTypeProperty';

export function objectTypeProperty(
  key: t.Identifier | t.StringLiteral,
  value: t.FlowType,
  variance: t.Variance | null | undefined = null,
): t.ObjectTypeProperty {
  return {
    type: TYPE,
    key,
    value,
    variance,
    kind: 'init',
    method: false,
    optional: false,
    proto: false,
    static: false,
  };
}

export function isObjectTypeProperty(
  node: t.Node | null | undefined,
): node is t.ObjectTypeProperty {
  return is(TYPE, node);
}

export function assertObjectTypeProperty(
  node: t.Node | null | undefined,
): asserts node is t.ObjectTypeProperty {
  assert(TYPE, node);
}

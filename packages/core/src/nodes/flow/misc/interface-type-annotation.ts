import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'InterfaceTypeAnnotation';

export function interfaceTypeAnnotation(
  interfaceExtends: t.InterfaceExtends[] | null | undefined,
  body: t.ObjectTypeAnnotation,
): t.InterfaceTypeAnnotation {
  return {
    type: TYPE,
    extends: interfaceExtends,
    body,
  };
}

export function isInterfaceTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.InterfaceTypeAnnotation {
  return is(TYPE, node);
}

export function assertInterfaceTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.InterfaceTypeAnnotation {
  assert(TYPE, node);
}

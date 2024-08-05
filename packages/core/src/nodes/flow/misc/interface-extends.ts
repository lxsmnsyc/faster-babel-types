import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'InterfaceExtends';

export function interfaceExtends(
  id: t.Identifier | t.QualifiedTypeIdentifier,
  typeParameters: t.TypeParameterInstantiation | null | undefined = null,
): t.InterfaceExtends {
  return {
    type: TYPE,
    id,
    typeParameters,
  };
}

export function isInterfaceExtends(
  node: t.Node | null | undefined,
): node is t.InterfaceExtends {
  return is(TYPE, node);
}

export function assertInterfaceExtends(
  node: t.Node | null | undefined,
): asserts node is t.InterfaceExtends {
  assert(TYPE, node);
}

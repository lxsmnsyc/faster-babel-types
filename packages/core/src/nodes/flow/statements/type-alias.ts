import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TypeAlias';

export function typeAlias(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined,
  right: t.FlowType,
): t.TypeAlias {
  return {
    type: TYPE,
    id,
    typeParameters,
    right,
  };
}

export function isTypeAlias(
  node: t.Node | null | undefined,
): node is t.TypeAlias {
  return is(TYPE, node);
}

export function assertTypeAlias(
  node: t.Node | null | undefined,
): asserts node is t.TypeAlias {
  assert(TYPE, node);
}

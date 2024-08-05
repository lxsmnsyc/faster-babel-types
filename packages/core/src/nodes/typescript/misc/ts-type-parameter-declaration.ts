import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeParameterDeclaration';

export function tsTypeParameterDeclaration(
  params: t.TSTypeParameter[],
): t.TSTypeParameterDeclaration {
  return {
    type: TYPE,
    params,
  };
}

export function isTSTypeParameterDeclaration(
  node: t.Node | null | undefined,
): node is t.TSTypeParameterDeclaration {
  return is(TYPE, node);
}

export function assertTSTypeParameterDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeParameterDeclaration {
  assert(TYPE, node);
}

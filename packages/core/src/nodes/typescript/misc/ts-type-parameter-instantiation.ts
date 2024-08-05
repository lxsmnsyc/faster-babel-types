import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeParameterInstantiation';

export function tsTypeParameterInstantiation(
  params: t.TSType[],
): t.TSTypeParameterInstantiation {
  return {
    type: TYPE,
    params,
  };
}

export function isTSTypeParameterInstantiation(
  node: t.Node | null | undefined,
): node is t.TSTypeParameterInstantiation {
  return is(TYPE, node);
}

export function assertTSTypeParameterInstantiation(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeParameterInstantiation {
  assert(TYPE, node);
}

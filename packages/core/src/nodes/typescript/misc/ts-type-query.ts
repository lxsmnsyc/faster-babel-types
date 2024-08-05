import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeQuery';

export function tsTypeQuery(
  exprName: t.TSEntityName | t.TSImportType,
  typeParameters: t.TSTypeParameterInstantiation | null | undefined = null,
): t.TSTypeQuery {
  return {
    type: TYPE,
    exprName,
    typeParameters,
  };
}

export function isTSTypeQuery(
  node: t.Node | null | undefined,
): node is t.TSTypeQuery {
  return is(TYPE, node);
}

export function assertTSTypeQuery(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeQuery {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSImportType';

export function tsImportType(
  argument: t.StringLiteral,
  qualifier: t.TSEntityName | null | undefined = null,
  typeParameters: t.TSTypeParameterInstantiation | null | undefined = null,
): t.TSImportType {
  return {
    type: TYPE,
    argument,
    qualifier,
    typeParameters,
  };
}

export function isTSImportType(
  node: t.Node | null | undefined,
): node is t.TSImportType {
  return is(TYPE, node);
}

export function assertTSImportType(
  node: t.Node | null | undefined,
): asserts node is t.TSImportType {
  assert(TYPE, node);
}

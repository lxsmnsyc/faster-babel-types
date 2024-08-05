import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSImportEqualsDeclaration';

export function tsImportEqualsDeclaration(
  id: t.Identifier,
  moduleReference: t.TSEntityName | t.TSExternalModuleReference,
): t.TSImportEqualsDeclaration {
  return {
    type: TYPE,
    id,
    moduleReference,
    isExport: false,
  };
}

export function isTSImportEqualsDeclaration(
  node: t.Node | null | undefined,
): node is t.TSImportEqualsDeclaration {
  return is(TYPE, node);
}

export function assertTSImportEqualsDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.TSImportEqualsDeclaration {
  assert(TYPE, node);
}

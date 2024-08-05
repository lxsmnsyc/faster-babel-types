import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'Import';

export function _import(): t.Import {
  return {
    type: TYPE,
  };
}

export function isImport(node: t.Node | null | undefined): node is t.Import {
  return is(TYPE, node);
}

export function assertImport(
  node: t.Node | null | undefined,
): asserts node is t.Import {
  assert(TYPE, node);
}

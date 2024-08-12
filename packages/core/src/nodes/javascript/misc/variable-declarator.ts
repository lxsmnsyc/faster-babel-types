import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'VariableDeclarator';

export function variableDeclarator(
  id: t.LVal,
  init: t.Expression | null | undefined = null,
): t.VariableDeclarator {
  return {
    type: TYPE,
    id,
    init,
  };
}

export function isVariableDeclarator(
  node: t.Node | null | undefined,
): node is t.VariableDeclarator {
  return is(TYPE, node);
}

export function assertVariableDeclarator(
  node: t.Node | null | undefined,
): asserts node is t.VariableDeclarator {
  assert(TYPE, node);
}

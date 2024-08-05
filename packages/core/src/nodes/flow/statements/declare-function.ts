import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareFunction';

export function declareFunction(id: t.Identifier): t.DeclareFunction {
  return {
    type: TYPE,
    id,
  };
}

export function isDeclareFunction(
  node: t.Node | null | undefined,
): node is t.DeclareFunction {
  return is(TYPE, node);
}

export function assertDeclareFunction(
  node: t.Node | null | undefined,
): asserts node is t.DeclareFunction {
  assert(TYPE, node);
}

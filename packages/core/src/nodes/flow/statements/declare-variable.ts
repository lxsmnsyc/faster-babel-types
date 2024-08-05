import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareVariable';

export function declareVariable(id: t.Identifier): t.DeclareVariable {
  return {
    type: TYPE,
    id,
  };
}

export function isDeclareVariable(
  node: t.Node | null | undefined,
): node is t.DeclareVariable {
  return is(TYPE, node);
}

export function assertDeclareVariable(
  node: t.Node | null | undefined,
): asserts node is t.DeclareVariable {
  assert(TYPE, node);
}

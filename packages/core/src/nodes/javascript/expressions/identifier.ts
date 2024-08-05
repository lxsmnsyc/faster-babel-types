import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'Identifier';

export function identifier(name: string): t.Identifier {
  return {
    type: TYPE,
    name,
  };
}

export function isIdentifier(
  node: t.Node | null | undefined,
): node is t.Identifier {
  return is(TYPE, node);
}

export function assertIdentifier(
  node: t.Node | null | undefined,
): asserts node is t.Identifier {
  assert(TYPE, node);
}

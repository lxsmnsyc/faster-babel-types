import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'NumberLiteral';

export function numericLiteral(value: number): t.NumberLiteral {
  return {
    type: TYPE,
    value,
  };
}

export function isNumberLiteral(
  node: t.Node | null | undefined,
): node is t.NumberLiteral {
  return is(TYPE, node);
}

export function assertNumberLiteral(
  node: t.Node | null | undefined,
): asserts node is t.NumberLiteral {
  assert(TYPE, node);
}

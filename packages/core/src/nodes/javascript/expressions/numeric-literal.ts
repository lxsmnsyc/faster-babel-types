import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'NumericLiteral';

export function numericLiteral(value: number): t.NumericLiteral {
  return {
    type: TYPE,
    value,
  };
}

export function isNumericLiteral(
  node: t.Node | null | undefined,
): node is t.NumericLiteral {
  return is(TYPE, node);
}

export function assertNumericLiteral(
  node: t.Node | null | undefined,
): asserts node is t.NumericLiteral {
  assert(TYPE, node);
}

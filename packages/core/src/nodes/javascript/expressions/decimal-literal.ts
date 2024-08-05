import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DecimalLiteral';

export function decimalLiteral(value: string): t.DecimalLiteral {
  return {
    type: TYPE,
    value,
  };
}

export function isDecimalLiteral(
  node: t.Node | null | undefined,
): node is t.DecimalLiteral {
  return is(TYPE, node);
}

export function assertDecimalLiteral(
  node: t.Node | null | undefined,
): asserts node is t.DecimalLiteral {
  assert(TYPE, node);
}

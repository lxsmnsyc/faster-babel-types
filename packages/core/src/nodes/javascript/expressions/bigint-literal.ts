import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'BigIntLiteral';

export function bigIntLiteral(value: string): t.BigIntLiteral {
  return {
    type: TYPE,
    value,
  };
}

export function isBigIntLiteral(
  node: t.Node | null | undefined,
): node is t.BigIntLiteral {
  return is(TYPE, node);
}

export function assertBigIntLiteral(
  node: t.Node | null | undefined,
): asserts node is t.BigIntLiteral {
  assert(TYPE, node);
}

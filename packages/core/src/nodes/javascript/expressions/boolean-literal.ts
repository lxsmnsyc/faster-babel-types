import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'BooleanLiteral';

export function booleanLiteral(value: boolean): t.BooleanLiteral {
  return {
    type: TYPE,
    value,
  };
}

export function isBooleanLiteral(
  node: t.Node | null | undefined,
): node is t.BooleanLiteral {
  return is(TYPE, node);
}

export function assertBooleanLiteral(
  node: t.Node | null | undefined,
): asserts node is t.BooleanLiteral {
  assert(TYPE, node);
}

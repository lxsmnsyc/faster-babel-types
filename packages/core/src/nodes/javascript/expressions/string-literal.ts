import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'StringLiteral';

export function stringLiteral(value: string): t.StringLiteral {
  return {
    type: TYPE,
    value,
  };
}

export function isStringLiteral(
  node: t.Node | null | undefined,
): node is t.StringLiteral {
  return is(TYPE, node);
}

export function assertStringLiteral(
  node: t.Node | null | undefined,
): asserts node is t.StringLiteral {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ThisExpression';

export function thisExpression(): t.ThisExpression {
  return {
    type: TYPE,
  };
}

export function isThisExpression(
  node: t.Node | null | undefined,
): node is t.ThisExpression {
  return is(TYPE, node);
}

export function assertThisExpression(
  node: t.Node | null | undefined,
): asserts node is t.ThisExpression {
  assert(TYPE, node);
}

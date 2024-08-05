import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXEmptyExpression';

export function jsxEmptyExpression(): t.JSXEmptyExpression {
  return {
    type: TYPE,
  };
}

export function isJSXEmptyExpression(
  node: t.Node | null | undefined,
): node is t.JSXEmptyExpression {
  return is(TYPE, node);
}

export function assertJSXEmptyExpression(
  node: t.Node | null | undefined,
): asserts node is t.JSXEmptyExpression {
  assert(TYPE, node);
}

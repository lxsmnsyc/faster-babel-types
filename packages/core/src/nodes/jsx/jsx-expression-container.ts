import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXExpressionContainer';

export function jsxExpressionContainer(
  expression: t.Expression | t.JSXEmptyExpression,
): t.JSXExpressionContainer {
  return {
    type: TYPE,
    expression,
  };
}

export function isJSXExpressionContainer(
  node: t.Node | null | undefined,
): node is t.JSXExpressionContainer {
  return is(TYPE, node);
}

export function assertJSXExpressionContainer(
  node: t.Node | null | undefined,
): asserts node is t.JSXExpressionContainer {
  assert(TYPE, node);
}

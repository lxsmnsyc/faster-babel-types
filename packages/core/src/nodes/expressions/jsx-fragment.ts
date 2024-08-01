import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXFragment';

export function jsxFragment(
  openingFragment: t.JSXOpeningFragment,
  closingFragment: t.JSXClosingFragment,
  children: Array<
    | t.JSXText
    | t.JSXExpressionContainer
    | t.JSXSpreadChild
    | t.JSXElement
    | t.JSXFragment
  >,
): t.JSXFragment {
  return {
    type: TYPE,
    openingFragment,
    closingFragment,
    children,
  };
}

export function isJSXFragment(
  node: t.Node | null | undefined,
): node is t.JSXFragment {
  return is(TYPE, node);
}

export function assertJSXFragment(
  node: t.Node | null | undefined,
): asserts node is t.JSXFragment {
  assert(TYPE, node);
}

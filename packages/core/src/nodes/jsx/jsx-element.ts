import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXElement';

export function jsxElement(
  openingElement: t.JSXOpeningElement,
  closingElement: t.JSXClosingElement | null | undefined,
  children: Array<
    | t.JSXText
    | t.JSXExpressionContainer
    | t.JSXSpreadChild
    | t.JSXElement
    | t.JSXFragment
  >,
  selfClosing: boolean | null | undefined = null,
): t.JSXElement {
  return {
    type: TYPE,
    openingElement,
    closingElement,
    children,
    selfClosing,
  };
}

export function isJSXElement(
  node: t.Node | null | undefined,
): node is t.JSXElement {
  return is(TYPE, node);
}

export function assertJSXElement(
  node: t.Node | null | undefined,
): asserts node is t.JSXElement {
  assert(TYPE, node);
}

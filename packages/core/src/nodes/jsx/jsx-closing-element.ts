import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXClosingElement';

export function jsxClosingElement(
  name: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName,
): t.JSXClosingElement {
  return {
    type: TYPE,
    name,
  };
}

export function isJSXClosingElement(
  node: t.Node | null | undefined,
): node is t.JSXClosingElement {
  return is(TYPE, node);
}

export function assertJSXClosingElement(
  node: t.Node | null | undefined,
): asserts node is t.JSXClosingElement {
  assert(TYPE, node);
}

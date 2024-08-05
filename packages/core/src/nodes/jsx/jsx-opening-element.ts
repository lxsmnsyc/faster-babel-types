import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXOpeningElement';

export function jsxOpeningElement(
  name: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName,
  attributes: Array<t.JSXAttribute | t.JSXSpreadAttribute>,
  selfClosing = false,
): t.JSXOpeningElement {
  return {
    type: TYPE,
    name,
    attributes,
    selfClosing,
  };
}

export function isJSXOpeningElement(
  node: t.Node | null | undefined,
): node is t.JSXOpeningElement {
  return is(TYPE, node);
}

export function assertJSXOpeningElement(
  node: t.Node | null | undefined,
): asserts node is t.JSXOpeningElement {
  assert(TYPE, node);
}

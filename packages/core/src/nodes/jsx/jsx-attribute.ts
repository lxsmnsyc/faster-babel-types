import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXAttribute';

export function jsxAttribute(
  name: t.JSXIdentifier | t.JSXNamespacedName,
  value:
    | t.JSXElement
    | t.JSXFragment
    | t.StringLiteral
    | t.JSXExpressionContainer
    | null = null,
): t.JSXAttribute {
  return {
    type: TYPE,
    name,
    value,
  };
}

export function isJSXAttribute(
  node: t.Node | null | undefined,
): node is t.JSXAttribute {
  return is(TYPE, node);
}

export function assertJSXAttribute(
  node: t.Node | null | undefined,
): asserts node is t.JSXAttribute {
  assert(TYPE, node);
}

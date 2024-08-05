import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXMemberExpression';

export function jsxMemberExpression(
  object: t.JSXMemberExpression | t.JSXIdentifier,
  property: t.JSXIdentifier,
): t.JSXMemberExpression {
  return {
    type: TYPE,
    object,
    property,
  };
}

export function isJSXMemberExpression(
  node: t.Node | null | undefined,
): node is t.JSXMemberExpression {
  return is(TYPE, node);
}

export function assertJSXMemberExpression(
  node: t.Node | null | undefined,
): asserts node is t.JSXMemberExpression {
  assert(TYPE, node);
}

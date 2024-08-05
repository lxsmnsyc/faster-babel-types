import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXSpreadAttribute';

export function jsxSpreadAttribute(
  argument: t.Expression,
): t.JSXSpreadAttribute {
  return {
    type: TYPE,
    argument,
  };
}

export function isJSXSpreadAttribute(
  node: t.Node | null | undefined,
): node is t.JSXSpreadAttribute {
  return is(TYPE, node);
}

export function assertJSXSpreadAttribute(
  node: t.Node | null | undefined,
): asserts node is t.JSXSpreadAttribute {
  assert(TYPE, node);
}

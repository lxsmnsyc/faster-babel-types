import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXText';

export function jsxText(value: string): t.JSXText {
  return {
    type: TYPE,
    value,
  };
}

export function isJSXText(node: t.Node | null | undefined): node is t.JSXText {
  return is(TYPE, node);
}

export function assertJSXText(
  node: t.Node | null | undefined,
): asserts node is t.JSXText {
  assert(TYPE, node);
}

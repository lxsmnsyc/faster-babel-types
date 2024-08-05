import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXClosingFragment';

export function jsxClosingFragment(): t.JSXClosingFragment {
  return {
    type: TYPE,
  };
}

export function isJSXClosingFragment(
  node: t.Node | null | undefined,
): node is t.JSXClosingFragment {
  return is(TYPE, node);
}

export function assertJSXClosingFragment(
  node: t.Node | null | undefined,
): asserts node is t.JSXClosingFragment {
  assert(TYPE, node);
}

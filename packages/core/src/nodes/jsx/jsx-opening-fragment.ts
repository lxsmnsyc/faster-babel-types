import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXOpeningFragment';

export function jsxOpeningFragment(): t.JSXOpeningFragment {
  return {
    type: TYPE,
  };
}

export function isJSXOpeningFragment(
  node: t.Node | null | undefined,
): node is t.JSXOpeningFragment {
  return is(TYPE, node);
}

export function assertJSXOpeningFragment(
  node: t.Node | null | undefined,
): asserts node is t.JSXOpeningFragment {
  assert(TYPE, node);
}

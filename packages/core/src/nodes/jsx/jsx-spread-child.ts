import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXSpreadChild';

export function jsxSpreadChild(
  expression: t.Expression,
): t.JSXSpreadChild {
  return {
    type: TYPE,
    expression,
  };
}

export function isJSXSpreadChild(
  node: t.Node | null | undefined,
): node is t.JSXSpreadChild {
  return is(TYPE, node);
}

export function assertJSXSpreadChild(
  node: t.Node | null | undefined,
): asserts node is t.JSXSpreadChild {
  assert(TYPE, node);
}

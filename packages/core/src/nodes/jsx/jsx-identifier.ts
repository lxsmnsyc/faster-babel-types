import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXIdentifier';

export function jsxIdentifier(name: string): t.JSXIdentifier {
  return {
    type: TYPE,
    name,
  };
}

export function isJSXIdentifier(
  node: t.Node | null | undefined,
): node is t.JSXIdentifier {
  return is(TYPE, node);
}

export function assertJSXIdentifier(
  node: t.Node | null | undefined,
): asserts node is t.JSXIdentifier {
  assert(TYPE, node);
}

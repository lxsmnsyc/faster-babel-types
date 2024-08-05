import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'JSXNamespacedName';

export function jsxNamespacedName(
  namespace: t.JSXIdentifier,
  name: t.JSXIdentifier,
): t.JSXNamespacedName {
  return {
    type: TYPE,
    namespace,
    name,
  };
}

export function isJSXNamespacedName(
  node: t.Node | null | undefined,
): node is t.JSXNamespacedName {
  return is(TYPE, node);
}

export function assertJSXNamespacedName(
  node: t.Node | null | undefined,
): asserts node is t.JSXNamespacedName {
  assert(TYPE, node);
}

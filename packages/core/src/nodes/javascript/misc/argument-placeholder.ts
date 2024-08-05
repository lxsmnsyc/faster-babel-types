import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ArgumentPlaceholder';

export function argumentPlaceholder(): t.ArgumentPlaceholder {
  return {
    type: TYPE,
  };
}

export function isArgumentPlaceholder(
  node: t.Node | null | undefined,
): node is t.ArgumentPlaceholder {
  return is(TYPE, node);
}

export function assertArgumentPlaceholder(
  node: t.Node | null | undefined,
): asserts node is t.ArgumentPlaceholder {
  assert(TYPE, node);
}

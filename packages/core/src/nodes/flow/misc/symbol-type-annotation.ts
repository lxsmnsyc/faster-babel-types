import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'SymbolTypeAnnotation';

export function symbolTypeAnnotation(): t.SymbolTypeAnnotation {
  return {
    type: TYPE,
  };
}

export function isSymbolTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.SymbolTypeAnnotation {
  return is(TYPE, node);
}

export function assertSymbolTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.SymbolTypeAnnotation {
  assert(TYPE, node);
}

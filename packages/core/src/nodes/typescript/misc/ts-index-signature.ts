import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSIndexSignature';

export function tsIndexSignature(
  parameters: t.Identifier[],
  typeAnnotation: t.TSTypeAnnotation | null | undefined = null,
): t.TSIndexSignature {
  return {
    type: TYPE,
    parameters,
    typeAnnotation,
  };
}

export function isTSIndexSignature(
  node: t.Node | null | undefined,
): node is t.TSIndexSignature {
  return is(TYPE, node);
}

export function assertTSIndexSignature(
  node: t.Node | null | undefined,
): asserts node is t.TSIndexSignature {
  assert(TYPE, node);
}

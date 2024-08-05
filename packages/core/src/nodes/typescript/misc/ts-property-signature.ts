import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSPropertySignature';

export type TSPropertySignature = 'get' | 'set' | null;

export function tsPropertySignature(
  key: t.Expression,
  typeAnnotation: t.TSTypeAnnotation | null | undefined = null,
  kind: TSPropertySignature = null,
): t.TSPropertySignature {
  return {
    type: TYPE,
    key,
    typeAnnotation,
    kind: kind as unknown as 'set', // no nulls lul,
  };
}

export function isTSPropertySignature(
  node: t.Node | null | undefined,
): node is t.TSPropertySignature {
  return is(TYPE, node);
}

export function assertTSPropertySignature(
  node: t.Node | null | undefined,
): asserts node is t.TSPropertySignature {
  assert(TYPE, node);
}

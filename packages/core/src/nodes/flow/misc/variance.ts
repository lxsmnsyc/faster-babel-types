import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'Variance';

export type VarianceKind = 'minus' | 'plus';

export function variance(kind: VarianceKind): t.Variance {
  return {
    type: TYPE,
    kind,
  };
}

export function isVariance(
  node: t.Node | null | undefined,
): node is t.Variance {
  return is(TYPE, node);
}

export function assertVariance(
  node: t.Node | null | undefined,
): asserts node is t.Variance {
  assert(TYPE, node);
}

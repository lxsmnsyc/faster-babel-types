import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeOperator';

export function tsTypeOperator(
  typeAnnotation: t.TSType,
  operator = 'keyof',
): t.TSTypeOperator {
  return {
    type: TYPE,
    typeAnnotation,
    operator,
  };
}

export function isTSTypeOperator(
  node: t.Node | null | undefined,
): node is t.TSTypeOperator {
  return is(TYPE, node);
}

export function assertTSTypeOperator(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeOperator {
  assert(TYPE, node);
}

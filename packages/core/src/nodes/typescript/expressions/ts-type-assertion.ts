import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeAssertion';

export function tsTypeAssertion(
  typeAnnotation: t.TSType,
  expression: t.Expression,
): t.TSTypeAssertion {
  return {
    type: TYPE,
    typeAnnotation,
    expression,
  };
}

export function isTSTypeAssertion(
  node: t.Node | null | undefined,
): node is t.TSTypeAssertion {
  return is(TYPE, node);
}

export function assertTSTypeAssertion(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeAssertion {
  assert(TYPE, node);
}

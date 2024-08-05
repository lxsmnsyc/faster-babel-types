import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypePredicate';

export function tsTypePredicate(
  parameterName: t.Identifier | t.TSThisType,
  typeAnnotation: t.TSTypeAnnotation | null | undefined = null,
  asserts: boolean | null | undefined = null,
): t.TSTypePredicate {
  return {
    type: TYPE,
    parameterName,
    typeAnnotation,
    asserts,
  };
}

export function isTSTypePredicate(
  node: t.Node | null | undefined,
): node is t.TSTypePredicate {
  return is(TYPE, node);
}

export function assertTSTypePredicate(
  node: t.Node | null | undefined,
): asserts node is t.TSTypePredicate {
  assert(TYPE, node);
}

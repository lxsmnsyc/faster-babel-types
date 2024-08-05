import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSInstantiationExpression';

export function tsInstantiationExpression(
  expression: t.Expression,
  typeParameters: t.TSTypeParameterInstantiation | null | undefined = null,
): t.TSInstantiationExpression {
  return {
    type: TYPE,
    expression,
    typeParameters,
  };
}

export function isTSInstantiationExpression(
  node: t.Node | null | undefined,
): node is t.TSInstantiationExpression {
  return is(TYPE, node);
}

export function assertTSInstantiationExpression(
  node: t.Node | null | undefined,
): asserts node is t.TSInstantiationExpression {
  assert(TYPE, node);
}

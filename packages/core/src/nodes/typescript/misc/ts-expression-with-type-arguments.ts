import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSExpressionWithTypeArguments';

export function tsExpressionWithTypeArguments(
  expression: t.TSEntityName,
  typeParameters: t.TSTypeParameterInstantiation | null | undefined = null,
): t.TSExpressionWithTypeArguments {
  return {
    type: TYPE,
    expression,
    typeParameters,
  };
}

export function isTSExpressionWithTypeArguments(
  node: t.Node | null | undefined,
): node is t.TSExpressionWithTypeArguments {
  return is(TYPE, node);
}

export function assertTSExpressionWithTypeArguments(
  node: t.Node | null | undefined,
): asserts node is t.TSExpressionWithTypeArguments {
  assert(TYPE, node);
}

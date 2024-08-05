import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'FunctionTypeParam';

export function functionTypeParam(
  name: t.Identifier | null | undefined,
  typeAnnotation: t.FlowType,
): t.FunctionTypeParam {
  return {
    type: TYPE,
    name,
    typeAnnotation,
  };
}

export function isFunctionTypeParam(
  node: t.Node | null | undefined,
): node is t.FunctionTypeParam {
  return is(TYPE, node);
}

export function assertFunctionTypeParam(
  node: t.Node | null | undefined,
): asserts node is t.FunctionTypeParam {
  assert(TYPE, node);
}

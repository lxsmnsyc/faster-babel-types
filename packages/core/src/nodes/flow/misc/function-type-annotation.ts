import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'FunctionTypeAnnotation';

export function functionTypeAnnotation(
  typeParameters: t.TypeParameterDeclaration | null | undefined,
  params: t.FunctionTypeParam[],
  rest: t.FunctionTypeParam | null | undefined,
  returnType: t.FlowType,
): t.FunctionTypeAnnotation {
  return {
    type: TYPE,
    typeParameters,
    params,
    rest,
    returnType,
  };
}

export function isFunctionTypeAnnotation(
  node: t.Node | null | undefined,
): node is t.FunctionTypeAnnotation {
  return is(TYPE, node);
}

export function assertFunctionTypeAnnotation(
  node: t.Node | null | undefined,
): asserts node is t.FunctionTypeAnnotation {
  assert(TYPE, node);
}

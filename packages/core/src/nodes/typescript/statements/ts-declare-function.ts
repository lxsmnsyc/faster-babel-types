import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSDeclareFunction';

export function tsDeclareFunction(
  id: t.Identifier | null | undefined,
  typeParameters: t.TSTypeParameterDeclaration | t.Noop | null | undefined,
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  returnType?: t.TSTypeAnnotation | t.Noop | null,
): t.TSDeclareFunction {
  return {
    type: TYPE,
    id,
    typeParameters,
    params,
    returnType,
  };
}

export function isTSDeclareFunction(
  node: t.Node | null | undefined,
): node is t.TSDeclareFunction {
  return is(TYPE, node);
}

export function assertTSDeclareFunction(
  node: t.Node | null | undefined,
): asserts node is t.TSDeclareFunction {
  assert(TYPE, node);
}

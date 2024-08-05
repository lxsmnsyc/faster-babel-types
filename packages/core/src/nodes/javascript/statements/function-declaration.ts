import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'FunctionDeclaration';

export function functionDeclaration(
  id: t.Identifier | null | undefined,
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  body: t.BlockStatement,
  generator = false,
  async = false,
): t.FunctionDeclaration {
  return {
    type: TYPE,
    id,
    params,
    body,
    generator,
    async,
  };
}

export function isFunctionDeclaration(
  node: t.Node | null | undefined,
): node is t.FunctionDeclaration {
  return is(TYPE, node);
}

export function assertFunctionDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.FunctionDeclaration {
  assert(TYPE, node);
}

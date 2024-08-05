import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ObjectMethod';

export function objectMethod(
  kind: 'method' | 'get' | 'set',
  key:
    | t.Expression
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral,
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  body: t.BlockStatement,
  computed = false,
  generator = false,
  async = false,
): t.ObjectMethod {
  return {
    type: TYPE,
    kind,
    key,
    params,
    body,
    computed,
    generator,
    async,
  };
}

export function isObjectMethod(
  node: t.Node | null | undefined,
): node is t.ObjectMethod {
  return is(TYPE, node);
}

export function assertObjectMethod(
  node: t.Node | null | undefined,
): asserts node is t.ObjectMethod {
  assert(TYPE, node);
}

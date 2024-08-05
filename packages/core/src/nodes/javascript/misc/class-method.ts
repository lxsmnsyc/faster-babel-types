import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ClassMethod';

export type ClassMethodKind = 'get' | 'set' | 'method' | 'constructor';

export function classMethod(
  kind: ClassMethodKind,
  key:
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.Expression,
  params: Array<
    t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
  >,
  body: t.BlockStatement,
  computed = false,
  isStatic = false,
  generator = false,
  async = false,
): t.ClassMethod {
  return {
    type: TYPE,
    kind,
    key,
    params,
    body,
    computed,
    static: isStatic,
    generator,
    async,
  };
}

export function isClassMethod(
  node: t.Node | null | undefined,
): node is t.ClassMethod {
  return is(TYPE, node);
}

export function assertClassMethod(
  node: t.Node | null | undefined,
): asserts node is t.ClassMethod {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ClassPrivateMethod';

export type ClassPrivateMethodKind = 'get' | 'set' | 'method';

export function classPrivateMethod(
  kind: ClassPrivateMethodKind,
  key: t.PrivateName,
  params: Array<
    t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
  >,
  body: t.BlockStatement,
  computed = false,
  isStatic = false,
  generator = false,
  async = false,
): t.ClassPrivateMethod {
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

export function isClassPrivateMethod(
  node: t.Node | null | undefined,
): node is t.ClassPrivateMethod {
  return is(TYPE, node);
}

export function assertClassPrivateMethod(
  node: t.Node | null | undefined,
): asserts node is t.ClassPrivateMethod {
  assert(TYPE, node);
}

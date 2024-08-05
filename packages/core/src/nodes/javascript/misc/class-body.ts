import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ClassBody';

export function classBody(
  body: Array<
    | t.ClassMethod
    | t.ClassPrivateMethod
    | t.ClassProperty
    | t.ClassPrivateProperty
    | t.ClassAccessorProperty
    | t.TSDeclareMethod
    | t.TSIndexSignature
    | t.StaticBlock
  >,
): t.ClassBody {
  return {
    type: TYPE,
    body,
  };
}

export function isClassBody(
  node: t.Node | null | undefined,
): node is t.ClassBody {
  return is(TYPE, node);
}

export function assertClassBody(
  node: t.Node | null | undefined,
): asserts node is t.ClassBody {
  assert(TYPE, node);
}

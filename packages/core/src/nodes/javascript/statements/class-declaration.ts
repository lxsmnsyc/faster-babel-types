import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ClassDeclaration';

export function classDeclaration(
  id: t.Identifier | null | undefined,
  superClass: t.Expression | null | undefined,
  body: t.ClassBody,
  decorators: t.Decorator[] | null | undefined = null,
): t.ClassDeclaration {
  return {
    type: TYPE,
    id,
    superClass,
    body,
    decorators,
  };
}

export function isClassDeclaration(
  node: t.Node | null | undefined,
): node is t.ClassDeclaration {
  return is(TYPE, node);
}

export function assertClassDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.ClassDeclaration {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ClassExpression';

export function classExpression(
  id: t.Identifier | null | undefined,
  superClass: t.Expression | null | undefined,
  body: t.ClassBody,
  decorators: t.Decorator[] | null | undefined = null,
): t.ClassExpression {
  return {
    type: TYPE,
    id,
    superClass,
    body,
    decorators,
  };
}

export function isClassExpression(
  node: t.Node | null | undefined,
): node is t.ClassExpression {
  return is(TYPE, node);
}

export function assertClassExpression(
  node: t.Node | null | undefined,
): asserts node is t.ClassExpression {
  assert(TYPE, node);
}

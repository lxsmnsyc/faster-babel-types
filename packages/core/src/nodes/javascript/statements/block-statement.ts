import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'BlockStatement';

export function blockStatement(
  body: t.Statement[],
  directives: t.Directive[] = [],
): t.BlockStatement {
  return {
    type: TYPE,
    body,
    directives,
  };
}

export function isBlockStatement(
  node: t.Node | null | undefined,
): node is t.BlockStatement {
  return is(TYPE, node);
}

export function assertBlockStatement(
  node: t.Node | null | undefined,
): asserts node is t.BlockStatement {
  assert(TYPE, node);
}

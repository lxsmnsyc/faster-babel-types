import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'Program';

export function program(
  body: t.Statement[],
  directives: t.Directive[] = [],
  sourceType: 'script' | 'module' = 'script',
  interpreter: t.InterpreterDirective | null | undefined = null,
): t.Program {
  return {
    type: TYPE,
    body,
    directives,
    sourceType,
    interpreter,
  };
}

export function isProgram(node: t.Node | null | undefined): node is t.Program {
  return is(TYPE, node);
}

export function assertProgram(
  node: t.Node | null | undefined,
): asserts node is t.Program {
  assert(TYPE, node);
}

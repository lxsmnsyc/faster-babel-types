import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'InterpreterDirective';

export function interpreterDirective(value: string): t.InterpreterDirective {
  return {
    type: TYPE,
    value,
  };
}

export function isInterpreterDirective(
  node: t.Node | null | undefined,
): node is t.InterpreterDirective {
  return is(TYPE, node);
}

export function assertInterpreterDirective(
  node: t.Node | null | undefined,
): asserts node is t.InterpreterDirective {
  assert(TYPE, node);
}

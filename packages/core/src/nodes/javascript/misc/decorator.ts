import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'Decorator';

export function decorator(expression: t.Expression): t.Decorator {
  return {
    type: TYPE,
    expression,
  };
}

export function isDecorator(
  node: t.Node | null | undefined,
): node is t.Decorator {
  return is(TYPE, node);
}

export function assertDecorator(
  node: t.Node | null | undefined,
): asserts node is t.Decorator {
  assert(TYPE, node);
}

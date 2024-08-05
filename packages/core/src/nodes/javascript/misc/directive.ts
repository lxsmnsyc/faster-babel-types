import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'Directive';

export function directive(value: t.DirectiveLiteral): t.Directive {
  return {
    type: TYPE,
    value,
  };
}

export function isDirective(
  node: t.Node | null | undefined,
): node is t.Directive {
  return is(TYPE, node);
}

export function assertDirective(
  node: t.Node | null | undefined,
): asserts node is t.Directive {
  assert(TYPE, node);
}

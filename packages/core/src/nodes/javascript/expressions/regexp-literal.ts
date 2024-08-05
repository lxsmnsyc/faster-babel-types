import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'RegExpLiteral';

export function regExpLiteral(pattern: string, flags = ''): t.RegExpLiteral {
  return {
    type: TYPE,
    pattern,
    flags,
  };
}

export function isRegExpLiteral(
  node: t.Node | null | undefined,
): node is t.RegExpLiteral {
  return is(TYPE, node);
}

export function assertRegExpLiteral(
  node: t.Node | null | undefined,
): asserts node is t.RegExpLiteral {
  assert(TYPE, node);
}

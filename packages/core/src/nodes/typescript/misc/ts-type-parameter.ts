import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSTypeParameter';

export function tsTypeParameter(
  constraint: t.TSType | null | undefined,
  _default: t.TSType | null | undefined,
  name: string,
): t.TSTypeParameter {
  return {
    type: TYPE,
    constraint,
    default: _default,
    name,
  };
}

export function isTSTypeParameter(
  node: t.Node | null | undefined,
): node is t.TSTypeParameter {
  return is(TYPE, node);
}

export function assertTSTypeParameter(
  node: t.Node | null | undefined,
): asserts node is t.TSTypeParameter {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSParameterProperty';

export function tsParameterProperty(
  parameter: t.Identifier | t.AssignmentPattern,
): t.TSParameterProperty {
  return {
    type: TYPE,
    parameter,
  };
}

export function isTSParameterProperty(
  node: t.Node | null | undefined,
): node is t.TSParameterProperty {
  return is(TYPE, node);
}

export function assertTSParameterProperty(
  node: t.Node | null | undefined,
): asserts node is t.TSParameterProperty {
  assert(TYPE, node);
}

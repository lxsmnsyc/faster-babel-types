import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSConditionalType';

export function tsConditionalType(
  checkType: t.TSType,
  extendsType: t.TSType,
  trueType: t.TSType,
  falseType: t.TSType,
): t.TSConditionalType {
  return {
    type: TYPE,
    checkType,
    extendsType,
    trueType,
    falseType,
  };
}

export function isTSConditionalType(
  node: t.Node | null | undefined,
): node is t.TSConditionalType {
  return is(TYPE, node);
}

export function assertTSConditionalType(
  node: t.Node | null | undefined,
): asserts node is t.TSConditionalType {
  assert(TYPE, node);
}

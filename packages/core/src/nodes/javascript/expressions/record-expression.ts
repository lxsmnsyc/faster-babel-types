import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'RecordExpression';

export function recordExpression(
  properties: Array<t.ObjectProperty | t.SpreadElement>,
): t.RecordExpression {
  return {
    type: TYPE,
    properties,
  };
}

export function isRecordExpression(
  node: t.Node | null | undefined,
): node is t.RecordExpression {
  return is(TYPE, node);
}

export function assertRecordExpression(
  node: t.Node | null | undefined,
): asserts node is t.RecordExpression {
  assert(TYPE, node);
}

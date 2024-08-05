import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'LabeledStatement';

export function labeledStatement(
  label: t.Identifier,
  body: t.Statement,
): t.LabeledStatement {
  return {
    type: TYPE,
    label,
    body,
  };
}

export function isLabeledStatement(
  node: t.Node | null | undefined,
): node is t.LabeledStatement {
  return is(TYPE, node);
}

export function assertLabeledStatement(
  node: t.Node | null | undefined,
): asserts node is t.LabeledStatement {
  assert(TYPE, node);
}

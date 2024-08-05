import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ModuleExpression';

export function moduleExpression(body: t.Program): t.ModuleExpression {
  return {
    type: TYPE,
    body,
  };
}

export function isModuleExpression(
  node: t.Node | null | undefined,
): node is t.ModuleExpression {
  return is(TYPE, node);
}

export function assertModuleExpression(
  node: t.Node | null | undefined,
): asserts node is t.ModuleExpression {
  assert(TYPE, node);
}

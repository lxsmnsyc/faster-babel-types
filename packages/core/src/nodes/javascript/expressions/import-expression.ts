import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ImportExpression';

export function importExpression(
  source: t.Expression,
  options: t.Expression | null | undefined = null,
): t.ImportExpression {
  return {
    type: TYPE,
    source,
    options,
  };
}

export function isImportExpression(
  node: t.Node | null | undefined,
): node is t.ImportExpression {
  return is(TYPE, node);
}

export function assertImportExpression(
  node: t.Node | null | undefined,
): asserts node is t.ImportExpression {
  assert(TYPE, node);
}

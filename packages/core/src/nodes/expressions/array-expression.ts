import type * as t from '@babel/types';
import { is } from '../../is';

const TYPE = 'ArrayExpression';

export function arrayExpression(
  elements: Array<null | t.Expression | t.SpreadElement>,
): t.ArrayExpression {
  return {
    type: TYPE,
    elements,
  };
}

export function isArrayExpression(
  node: t.Node | null | undefined,
): node is t.ArrayExpression {
  return is(TYPE, node);
}

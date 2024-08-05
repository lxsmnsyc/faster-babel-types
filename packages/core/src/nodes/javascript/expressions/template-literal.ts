import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TemplateLiteral';

export function templateLiteral(
  quasis: t.TemplateElement[],
  expressions: Array<t.Expression | t.TSType>,
): t.TemplateLiteral {
  return {
    type: TYPE,
    quasis,
    expressions,
  };
}

export function isTemplateLiteral(
  node: t.Node | null | undefined,
): node is t.TemplateLiteral {
  return is(TYPE, node);
}

export function assertTemplateLiteral(
  node: t.Node | null | undefined,
): asserts node is t.TemplateLiteral {
  assert(TYPE, node);
}

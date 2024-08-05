import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TaggedTemplateExpression';

export function taggedTemplateExpression(
  tag: t.Expression,
  quasi: t.TemplateLiteral,
): t.TaggedTemplateExpression {
  return {
    type: TYPE,
    tag,
    quasi,
  };
}

export function isTaggedTemplateExpression(
  node: t.Node | null | undefined,
): node is t.TaggedTemplateExpression {
  return is(TYPE, node);
}

export function assertTaggedTemplateExpression(
  node: t.Node | null | undefined,
): asserts node is t.TaggedTemplateExpression {
  assert(TYPE, node);
}

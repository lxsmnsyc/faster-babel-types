import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TemplateElement';

export function templateElement(
  value: { raw: string; cooked?: string },
  tail = false,
): t.TemplateElement {
  return {
    type: TYPE,
    value,
    tail,
  };
}

export function isTemplateElement(
  node: t.Node | null | undefined,
): node is t.TemplateElement {
  return is(TYPE, node);
}

export function assertTemplateElement(
  node: t.Node | null | undefined,
): asserts node is t.TemplateElement {
  assert(TYPE, node);
}

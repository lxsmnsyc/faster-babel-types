import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'MetaProperty';

export function metaProperty(
  meta: t.Identifier,
  property: t.Identifier,
): t.MetaProperty {
  return {
    type: TYPE,
    meta,
    property,
  };
}

export function isMetaProperty(
  node: t.Node | null | undefined,
): node is t.MetaProperty {
  return is(TYPE, node);
}

export function assertMetaProperty(
  node: t.Node | null | undefined,
): asserts node is t.MetaProperty {
  assert(TYPE, node);
}

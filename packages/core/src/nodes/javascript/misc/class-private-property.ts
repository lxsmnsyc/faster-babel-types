import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'ClassPrivateProperty';

export function classPrivateProperty(
  key: t.PrivateName,
  value?: t.Expression | null,
  decorators?: t.Decorator[] | null,
  isStatic = false,
): t.ClassPrivateProperty {
  return {
    type: TYPE,
    key,
    value,
    decorators,
    static: isStatic,
  };
}

export function isClassPrivateProperty(
  node: t.Node | null | undefined,
): node is t.ClassPrivateProperty {
  return is(TYPE, node);
}

export function assertClassPrivateProperty(
  node: t.Node | null | undefined,
): asserts node is t.ClassPrivateProperty {
  assert(TYPE, node);
}

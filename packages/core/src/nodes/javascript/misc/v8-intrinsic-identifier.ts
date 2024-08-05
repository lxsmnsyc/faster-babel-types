import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'V8IntrinsicIdentifier';

export function v8IntrinsicIdentifier(name: string): t.V8IntrinsicIdentifier {
  return {
    type: TYPE,
    name,
  };
}

export function isV8IntrinsicIdentifier(
  node: t.Node | null | undefined,
): node is t.V8IntrinsicIdentifier {
  return is(TYPE, node);
}

export function assertV8IntrinsicIdentifier(
  node: t.Node | null | undefined,
): asserts node is t.V8IntrinsicIdentifier {
  assert(TYPE, node);
}

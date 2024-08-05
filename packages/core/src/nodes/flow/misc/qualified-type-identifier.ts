import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'QualifiedTypeIdentifier';

export function qualifiedTypeIdentifier(
  id: t.Identifier,
  qualification: t.Identifier | t.QualifiedTypeIdentifier,
): t.QualifiedTypeIdentifier {
  return {
    type: TYPE,
    id,
    qualification,
  };
}

export function isQualifiedTypeIdentifier(
  node: t.Node | null | undefined,
): node is t.QualifiedTypeIdentifier {
  return is(TYPE, node);
}

export function assertQualifiedTypeIdentifier(
  node: t.Node | null | undefined,
): asserts node is t.QualifiedTypeIdentifier {
  assert(TYPE, node);
}

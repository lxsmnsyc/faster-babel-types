import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareModule';

export type DeclareModuleKind = 'CommonJS' | 'ES';

export function declareModule(
  id: t.Identifier | t.StringLiteral,
  body: t.BlockStatement,
  kind?: DeclareModuleKind | null,
): t.DeclareModule {
  return {
    type: TYPE,
    id,
    body,
    kind,
  };
}

export function isDeclareModule(
  node: t.Node | null | undefined,
): node is t.DeclareModule {
  return is(TYPE, node);
}

export function assertDeclareModule(
  node: t.Node | null | undefined,
): asserts node is t.DeclareModule {
  assert(TYPE, node);
}

import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'VariableDeclaration';

export type VariableDeclarationKind =
  | 'var'
  | 'let'
  | 'const'
  | 'using'
  | 'await using';

export function variableDeclaration(
  kind: VariableDeclarationKind,
  declarations: t.VariableDeclarator[],
): t.VariableDeclaration {
  return {
    type: TYPE,
    kind,
    declarations,
  };
}

export function isVariableDeclaration(
  node: t.Node | null | undefined,
): node is t.VariableDeclaration {
  return is(TYPE, node);
}

export function assertVariableDeclaration(
  node: t.Node | null | undefined,
): asserts node is t.VariableDeclaration {
  assert(TYPE, node);
}

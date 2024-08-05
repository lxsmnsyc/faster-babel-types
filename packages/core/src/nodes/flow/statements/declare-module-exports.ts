import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'DeclareModuleExports';

export function declareModuleExports(
  typeAnnotation: t.TypeAnnotation,
): t.DeclareModuleExports {
  return {
    type: TYPE,
    typeAnnotation,
  };
}

export function isDeclareModuleExports(
  node: t.Node | null | undefined,
): node is t.DeclareModuleExports {
  return is(TYPE, node);
}

export function assertDeclareModuleExports(
  node: t.Node | null | undefined,
): asserts node is t.DeclareModuleExports {
  assert(TYPE, node);
}

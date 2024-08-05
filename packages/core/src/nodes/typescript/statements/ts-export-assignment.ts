import type * as t from '@babel/types';
import { assert } from '../../../assert-node-type';
import { is } from '../../../is-node-type';

const TYPE = 'TSExportAssignment';

export function tsExportAssignment(
  expression: t.Expression,
): t.TSExportAssignment {
  return {
    type: TYPE,
    expression,
  };
}

export function isTSExportAssignment(
  node: t.Node | null | undefined,
): node is t.TSExportAssignment {
  return is(TYPE, node);
}

export function assertTSExportAssignment(
  node: t.Node | null | undefined,
): asserts node is t.TSExportAssignment {
  assert(TYPE, node);
}

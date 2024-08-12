import type * as t from '@babel/types';
import { assert } from '../../assert-node-type';
import { is } from '../../is-node-type';

const TYPE = 'File';

export function file(
  program: t.Program,
  comments: Array<t.CommentBlock | t.CommentLine> | null | undefined = null,
  tokens: any[] | null | undefined = null,
): t.File {
  return {
    type: TYPE,
    program,
    comments,
    tokens,
  };
}

export function isFile(node: t.Node | null | undefined): node is t.File {
  return is(TYPE, node);
}

export function assertFile(
  node: t.Node | null | undefined,
): asserts node is t.File {
  assert(TYPE, node);
}

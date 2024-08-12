import type * as t from '@babel/types';

export function addComments<T extends t.Node>(
  node: T,
  type: t.CommentTypeShorthand,
  comments: t.Comment[],
): T {
  const key = `${type}Comments` as const;

  if (node[key]) {
    if (type === 'leading') {
      node[key] = comments.concat(node[key]);
    } else {
      node[key].push.apply(node[key], comments);
    }
  } else {
    node[key] = comments;
  }

  return node;
}

export function addComment<T extends t.Node>(
  node: T,
  type: t.CommentTypeShorthand,
  comment: t.Comment,
): T {
  return addComments(node, type, [comment]);
}

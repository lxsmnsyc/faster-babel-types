import type * as t from '@babel/types';

export function is<
  T extends t.Node['type'],
  P extends Extract<
    t.Node,
    {
      type: T;
    }
  >,
>(type: T, node: t.Node | null | undefined): node is P {
  return node != null && node.type === type;
}

export function either<
  T extends t.Node['type'],
  P extends Extract<
    t.Node,
    {
      type: T;
    }
  >,
>(types: Set<T>, node: t.Node | null | undefined): node is P {
  return node != null && types.has(node.type as T);
}

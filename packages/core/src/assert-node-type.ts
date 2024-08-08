import type * as t from '@babel/types';
import { either, is } from './is-node-type';

// https://github.com/babel/babel/blob/dba45d3ebc92a868c9b8952a6f407c6ab83c6b3f/packages/babel-types/src/asserts/generated/index.ts#L9
export function assert<
  T extends t.Node['type'],
  P extends Extract<
    t.Node,
    {
      type: T;
    }
  >,
>(type: T, node: t.Node | null | undefined): asserts node is P {
  if (is(type, node)) {
    throw new Error(
      'Expected type "' + type + '" but instead got "' + node.type + '".',
    );
  }
}

function formatTypeSet<T extends t.Node['type']>(types: Set<T>): string {
  let result = '';
  for (const type of types) {
    if (result !== '') {
      result += ' | ';
    }
    result += '"' + type + '"';
  }
  return result;
}

export function assertEither<
  T extends t.Node['type'],
  P extends Extract<
    t.Node,
    {
      type: T;
    }
  >,
>(types: Set<T>, node: t.Node | null | undefined): asserts node is P {
  if (either(types, node)) {
    throw new Error(
      'Expected type "' +
        formatTypeSet(types) +
        '" but instead got "' +
        node.type +
        '".',
    );
  }
}

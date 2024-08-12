import * as t from '@babel/types';
import * as t2 from './index';

type Filter<X> = X extends `${string}_${string}`
  ? never
  : X extends `assert${string}`
    ? never
    : X extends `is${string}`
      ? never
      : X;

type A = Filter<keyof typeof t>;
type B = keyof typeof t2;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type C = Exclude<A, B>;
//   ^?
import * as t from '@babel/types';
import * as t2 from './index';

type A = keyof typeof t;
type B = keyof typeof t2;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type C = Prettify<Record<Exclude<A, B>, string>>;

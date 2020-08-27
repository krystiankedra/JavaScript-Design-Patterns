export const pipe = (...fns: Function[]) => <T>(initialArg: T): T => fns.reduce((acc, fn) => fn(acc), initialArg);
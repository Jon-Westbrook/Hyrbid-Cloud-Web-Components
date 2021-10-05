export type DataStatus = 'ready' | 'loading' | 'error';
export type HOF<T> = (input: T) => T;
export type HOFP<T> = (input: T) => Promise<T>;

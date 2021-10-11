export type DataStatus = 'ready' | 'loading' | 'error';
export type HOF<T> = (input: T) => T;
export type HOFP<T> = (input: T) => Promise<T>;

export enum FetchStatusEnum {
  INIT = 'INIT',
  IN_PROGRESS = 'IN_PROGRESS',
  READY = 'READY',
  FAILURE = 'FAILURE',
}

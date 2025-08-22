export const Status = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Error: 'error',
  NoData: 'noData',
} as const;

export type StatusType = (typeof Status)[keyof typeof Status];

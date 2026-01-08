export type PendingRequest = {
  retry: (token: string) => void;
  error: (err: unknown) => void;

};


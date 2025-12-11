export type Response = {
  message: string,
  token?: string,
  expiresAt?: string,
  data: {
    username?: string,
    email?: string

  }

};

export type User = {
  email: string,
  password: string,
  age?: number,
  username?: string
};

export const users: Array<User> = [
  {
  email: 'km@gmail.com', 
  password: '123'
  }
]
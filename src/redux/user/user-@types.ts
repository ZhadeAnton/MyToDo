export interface IUser {
  user?: {
    currentUser: {
      createAt: {[key: string]: number}
    },
    displayName: string,
    email: string,
    id: string
  }
}

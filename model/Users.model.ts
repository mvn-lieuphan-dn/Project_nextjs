export interface IUsers {
  username: string;
  password: string;
  position: string;
}

export class Users implements IUsers {
  username: string;
  password: string;
  position: string;

  constructor(data: Users) {
    this.username = data.username;
    this.password = data.password || "";
    this.position = data.position || "";
  }
}

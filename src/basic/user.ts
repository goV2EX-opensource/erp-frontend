import { SparkMD5 } from 'spark-md5';

export class User {
  name: string;
  avatar: string;

  token: string;
  tokenExpiredAt: Date;

  constructor(src) {
    this.name = src.name;
    this.avatar = `https://www.gravatar.com/avatar/${SparkMD5.hash(this.name)}?d=retro`;

    this.token = '';
    this.tokenExpiredAt = new Date();
  }
}
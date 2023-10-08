import Bot from "./client";

export interface IUtil {
  client: Bot;
  name: string;
}
export class Util implements IUtil {
  public client: Bot;
  public name: string;
  constructor(client: Bot, name: string) {
    this.client = client;
    this.name = name;
  }
}

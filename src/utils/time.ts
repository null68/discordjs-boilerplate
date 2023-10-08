import Bot from "../structure/client";
import { Util } from "../structure/util";

export default class Time extends Util {
  constructor(client: Bot) {
    super(client, "time");
  }
  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

import { readdirSync } from "fs";
import Bot from "../structure/client";
import { IUtil } from "../structure/util";
import { join } from "path";
import Logger from "./logger";

export default class UtilHandler {
  static async init(client: Bot) {
    try {
      let utils_dir = readdirSync(join(__dirname, "../utils/"));
      let i = 0;
      for (let util_dir of utils_dir) {
        let util: IUtil = new (await import(`../utils/${util_dir}`)).default(
          client
        ) as IUtil;
        if (!util.name) continue;
        client.utils[util.name] = util;
        i += 1;
      }
      Logger.info(`Loaded ${i} util/s`);
    } catch (e) {
      Logger.warn("Can't find files in utils/ directory!");
    }
  }
}

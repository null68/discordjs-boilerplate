import CommandHandler from "../../services/commandhandler";
import CronJobHandler from "../../services/cronhandler";
import Logger from "../../services/logger";
import UtilHandler from "../../services/utilhandler";
import Bot from "../../structure/client";
import { Event } from "../../structure/event";

export default class Ready extends Event {
  constructor(client: Bot) {
    super(client, {
      name: "ready",
      once: true,
    });
  }
  async execute(): Promise<void> {
    await CommandHandler.init(this.client);
    await CronJobHandler.init(this.client);
    await UtilHandler.init(this.client);
    Logger.info("Online");
  }
}

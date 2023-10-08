import CommandHandler from "../../services/commandhandler";
import Logger from "../../services/logger";
import Bot from "../../structure/client";
import { Event } from "../../structure/event";

export default class ChangeActivity extends Event {
  constructor(client: Bot) {
    super(client, {
      name: "changeActivity",
      once: false,
    });
  }
  async execute(activity: string): Promise<void> {
    this.client.user?.setPresence({
      status: "dnd",
    });
    this.client.user?.setActivity({
      name: activity,
    });
  }
}

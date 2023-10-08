import Logger from "../../services/logger";
import Bot from "../../structure/client";
import { Event } from "../../structure/event";

export default class ClientError extends Event {
  constructor(client: Bot) {
    super(client, {
      name: "error",
    });
  }
  async execute(err: Error): Promise<void> {
    Logger.error(`${err.name} ${err.message}`);
  }
}

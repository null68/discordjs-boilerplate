import { readdirSync } from "fs";
import path from "path";
import Bot from "../structure/client";
import Logger from "./logger";
import { IEvent } from "../structure/event";
export default class EventHandler {
  static async load_client_events(client: Bot) {
    try {
      let events_dir: string[] = readdirSync(
        path.join(__dirname, "..", "events", "client")
      );
      let i = 0;
      for (let event_dir of events_dir) {
        let event: IEvent = new (
          await import(`../events/client/${event_dir}`)
        ).default(client) as IEvent;
        client[event.once ? "once" : "on"](event.name, (...args: any[]) => {
          event.execute(...args);
        });
        i += 1;
      }
      Logger.info(`Loaded ${i} client event/s.`);
    } catch (e) {
      Logger.warn("Can't find files events/client directory!");
    }
  }
  static async load_library_events(client: Bot) {
    try {
      let events_dir: string[] = readdirSync(
        path.join(__dirname, "..", "events", "library")
      );
      let i = 0;
      for (let event_dir of events_dir) {
        let event: IEvent = new (
          await import(`../events/library/${event_dir}`)
        ).default(client) as IEvent;
        client[event.once ? "once" : "on"](event.name, (...args: any[]) => {
          event.execute(...args);
        });
        i += 1;
      }
      Logger.info(`Loaded ${i} library event/s.`);
    } catch (e) {
      Logger.warn("Can't find files in events/library directory!\n" + e);
    }
  }
  static async init(client: Bot) {
    await this.load_client_events(client);
    await this.load_library_events(client);
  }
}

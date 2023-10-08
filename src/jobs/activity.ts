import Bot from "../structure/client";
import { Cronjob } from "../structure/cron";

export default class Presence extends Cronjob {
  constructor(client: Bot) {
    super(client, {
      enabled: true,
      name: "activity",
      format: "* * * * *",
    });
  }
  async init() {
    let presences = ["/help", "discord.gg/balkan"];
    this.client.emit(
      "changeActivity",
      presences[Math.floor(Math.random() * presences.length)]
    );
  }
}

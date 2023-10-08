import { ShardingManager } from "discord.js";
import { IConfig } from "./config";
import Logger from "./services/logger";
import { Config } from "./config";
class Application {
  protected manager: ShardingManager | null;
  private config: IConfig = Config;
  constructor() {
    this.manager = null;
  }
  async start() {
    this.manager = new ShardingManager("dist/structure/client.js", {
      totalShards: "auto",
      token: this.config.token,
      respawn: true,
    });

    this.manager.on("shardCreate", (shard) => {
      Logger.info(`Launched shard ${shard.id}`);
    });
    this.manager.spawn({ amount: "auto" });
  }
}

new Application().start();

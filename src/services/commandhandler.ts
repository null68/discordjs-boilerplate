import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "@discordjs/core";
import Bot from "../structure/client";
import { ICommand } from "../structure/command";
import Logger from "./logger";
import { readdirSync } from "fs";
import path from "path";

export default class CommandHandler {
  static async register_commands(client: Bot) {
    let commandData: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];
    client.commands.each((cmd: ICommand) => {
      commandData.push(cmd.data);
    });
    const result =
      await client.api.applicationCommands.bulkOverwriteGlobalCommands(
        client.user?.id as string,
        commandData
      );
    return result;
  }
  static async init(client: Bot) {
    let commandsCategoryDir: string[] = readdirSync(
      path.join(__dirname, "..", "commands")
    );
    let i = 0;
    for (let commandsDirs of commandsCategoryDir) {
      let commandsDir: string[] = readdirSync(
        path.join(__dirname, "..", "commands", commandsDirs)
      );
      for (let command of commandsDir) {
        let commandClass: ICommand = new (
          await import(`../commands/${commandsDirs}/${command}`)
        ).default(client);
        client.commands.set(commandClass.data.name, commandClass);
        i += 1;
      }
    }
    this.register_commands(client);
    Logger.info(`Loaded ${i} command/s`);
  }
}

import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "@discordjs/core";
import {
  AutocompleteInteraction,
  CacheType,
  CommandInteraction,
} from "discord.js";
import Bot from "./client";
import Logger from "../services/logger";

export interface ICommand {
  data: RESTPostAPIChatInputApplicationCommandsJSONBody;
  execute(interaction: CommandInteraction): Promise<void>;
}
export class Command implements ICommand {
  public client: Bot;
  public data: RESTPostAPIChatInputApplicationCommandsJSONBody;
  constructor(
    client: Bot,
    data: RESTPostAPIChatInputApplicationCommandsJSONBody
  ) {
    this.client = client;
    this.data = data;
  }
  async execute(interaction: CommandInteraction): Promise<void> {
    Logger.warn(`${this.data.name} command is not initialized`);
    interaction.reply("Command is not initialized");
  }
}

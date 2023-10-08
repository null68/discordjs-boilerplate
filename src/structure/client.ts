import { Client, Collection, IntentsBitField } from "discord.js";
import { Config, IConfig } from "../config";
import EventHandler from "../services/eventhandler";
import { REST } from "@discordjs/rest";
import { API } from "@discordjs/core";
import { ICommand } from "./command";
import CronJobHandler from "../services/cronhandler";

export default class Bot extends Client {
  public config: IConfig;
  public rest: REST;
  public api: API;
  public commands: Collection<string, ICommand>;
  public utils: any;
  constructor() {
    super({
      intents: [
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.MessageContent,
      ],
    });
    this.config = Config;
    this.token = this.config.token;
    this.rest = new REST({ version: "10" }).setToken(this.token as string);
    this.api = new API(this.rest);
    this.commands = new Collection();
    this.utils = {};
  }
  async init() {
    await EventHandler.init(this);
    this.login();
    return this;
  }
}
new Bot().init();

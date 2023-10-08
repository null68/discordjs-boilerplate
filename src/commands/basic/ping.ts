import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import Bot from "../../structure/client";
import { Command } from "../../structure/command";

export default class Ping extends Command {
  constructor(client: Bot) {
    super(
      client,
      new SlashCommandBuilder().setName("ping").setDescription("Pong!").toJSON()
    );
  }
  async execute(interaction: CommandInteraction): Promise<void> {
    interaction.reply("Pong!");
  }
}

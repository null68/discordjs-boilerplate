import { BaseInteraction, ChatInputCommandInteraction } from "discord.js";
import Bot from "../../structure/client";
import { Event } from "../../structure/event";

export default class Interaction extends Event {
  constructor(client: Bot) {
    super(client, {
      name: "interactionCreate",
    });
  }
  async execute(interaction: BaseInteraction): Promise<void> {
    if (!interaction.inGuild()) {
      return;
    }
    if (interaction.isChatInputCommand()) {
      let command = this.client.commands.get(interaction.commandName);
      if (!command) {
        await interaction.reply({
          content: "Command not found!",
          ephemeral: true,
        });
      }
      await command?.execute(interaction);
    }
  }
}

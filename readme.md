# djs-boilerplate

Get started with a new Discord bot using `discord.js` fast.

## Usage

This section contains information about where to define new functionality for your Discord bot.

### Events

Trigger actions on a new event by adding a new file that has the same name as a specific **event name** defined in the event section of the [documentation](https://discord.js.org/#/docs/main/stable/class/Client).

To properly initialize the event, this file has to be added to the event directory you specified in the configuration file of the bot: `config.ts`.

\*Example of Library Event: **ready.ts\***

```typescript
import Logger from "../../services/logger";
import Bot from "../../structure/client";
import { Event } from "../../structure/event";

export default class Ready extends Event {
  constructor(client: Bot) {
    super(client, {
      name: "ready",
      once: true,
    });
  }
  async execute(): Promise<void> {
    Logger.info("Online");
  }
}
```

### Slash Commands

Execute commands when a specific keyword including the command prefix has been sent in a Discord channel.

\*Example of Command: **ping.ts\***

```typescript
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
```

## Running

To run the bot, first create an application on the Discord developer portal.
A proper `config.ts` file should look like this:

```typescript
export interface IConfig {
  token: string;
}

export const Config: IConfig = {
  token: "RANDOMTOKENYOURECEIVEDFROMTHEDEVELOPERPORTAL",
};
```

After everything is configured, you can run the bot locally by executing the `npm start` command.

## Documentation

During development, refer to the documentation served by [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome).

## License

[MIT](LICENSE)

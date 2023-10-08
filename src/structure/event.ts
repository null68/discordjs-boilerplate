import Logger from "../services/logger";
import Bot from "./client";

export interface IEvent {
  name: string;
  once?: boolean;
  execute(...args: any[]): Promise<void>;
}
type EventOptions = {
  name: string;
  once?: boolean;
};

export class Event implements IEvent {
  protected client;
  public name: string;
  public once?: boolean;
  constructor(client: Bot, options: EventOptions) {
    this.client = client;
    this.name = options.name;
    this.once = options.once || false;
  }
  async execute(...args: any[]): Promise<void> {
    Logger.error(
      `${this.constructor.name}'s execute() method don't have any code.`
    );
  }
}

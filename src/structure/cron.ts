import Logger from "../services/logger";
import Bot from "./client";

export interface ICronjob {
  enabled?: boolean;
  format: string;
  name: string;
  init(): void;
}
type CronOptions = {
  enabled?: boolean;
  format: string;
  name: string;
};
export class Cronjob implements ICronjob {
  protected client: Bot;
  public enabled: boolean;
  public format: string;
  public name: string;
  constructor(client: Bot, options: CronOptions) {
    this.client = client;
    this.enabled = options.enabled || true;
    this.format = options.format;
    this.name = options.name;
  }
  public init(): void {
    Logger.error(
      `${this.constructor.name}'s init() method don't have any code.`
    );
  }
}

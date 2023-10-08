import chalk from "chalk";
export default class Logger {
  static info(message: string) {
    console.log(`[${chalk.blueBright("INFO")}] -> ${message}`);
  }
  static error(message: string) {
    console.log(`[${chalk.redBright("ERROR")}] -> ${message}`);
  }
  static warn(message: string) {
    console.log(`[${chalk.yellow("WARN")}] -> ${message}`);
  }
}

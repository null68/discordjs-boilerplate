import cron from "node-cron";
import Bot from "../structure/client";
import { readdirSync } from "fs";
import { join } from "path";
import { ICronjob } from "../structure/cron";
import Logger from "./logger";
export default class CronJobHandler {
  static async init(client: Bot) {
    try {
      let jobs_dir = readdirSync(join(__dirname, "../jobs/"));
      let i = 0;
      for (let job_dir of jobs_dir) {
        let job: ICronjob = new (await import(`../jobs/${job_dir}`)).default(
          client
        ) as ICronjob;
        if (job.enabled) {
          cron.schedule(job.format, () => job.init(), {
            timezone: "Europe/Sarajevo",
          });
          i += 1;
        }
      }
      Logger.info(`Loaded ${i} cron job/s.`);
    } catch (e) {
      Logger.warn("Can't find files in jobs/ directory!");
    }
  }
}

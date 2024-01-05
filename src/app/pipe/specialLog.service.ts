import {Injectable} from "@angular/core";
import {LogLevel, LogService} from "./log.service";

@Injectable()
export class SpecialLogService extends LogService {
  constructor() {
    super()
    this.minumumLevel = LogLevel.INFO;
  }

  override logMessage(level: LogLevel, message: string) {
    if (level >= this.minumumLevel) {
      console.log(`Special Message (${LogLevel[level]}): ${message}`);
    }else {
      console.log(`No Log in console.`)
    }
  }
}

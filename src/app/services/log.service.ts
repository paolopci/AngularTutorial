import {Injectable, InjectionToken} from "@angular/core";


export const LOG_SERVICE = new InjectionToken('logger');

export enum LogLevel {
  DEBUG, INFO, ERROR
}


@Injectable()

export class LogService {

  minumumLevel: LogLevel = LogLevel.INFO;

  logInfoMessage(message: string) {
    this.logMessage(LogLevel.INFO, message);
  }

  logDebugMessage(message: string) {
    this.logMessage(LogLevel.DEBUG, message);
  }

  logErrorMessage(message: string) {
    this.logMessage(LogLevel.ERROR, message);
  }


  logMessage(level: LogLevel, message: string) {
    if (level >= this.minumumLevel) {
      console.log(`Message (${LogLevel[level]}): ${message}`);
    }else {
      console.log(`No Log in console.`)
    }
  }
}

export interface Logger {
  log(message: string): void;
  error(message: string): void;
}

export class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log(`[LOG] ${msg}`);
  }

  error(msg: string) {
    console.error(`[ERROR] ${msg}`);
  }
}
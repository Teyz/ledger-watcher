import fetch from 'node-fetch';
import { Notifier } from './types';

type TelegramConfig = {
  token: string;
  chat_id: string;
};

export class TelegramNotifier implements Notifier {
  constructor(private config: TelegramConfig) {}

  async send(message: string): Promise<void> {
    await fetch(`https://api.telegram.org/bot${this.config.token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: this.config.chat_id,
        text: message,
      }),
    });
  }
}
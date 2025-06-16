import fs from 'fs';
import yaml from 'js-yaml';

export interface Wallet {
  name: string;
  address: string;
  chain: string;
}

export interface Config {
  wallets: Wallet[];
  poll_interval: number;
  notifiers: {
    telegram: {
      token: string;
      chat_id: string;
    };
  };
}

export function loadConfig(path: string): Config {
  const content = fs.readFileSync(path, 'utf8');
  return yaml.load(content) as Config;
}
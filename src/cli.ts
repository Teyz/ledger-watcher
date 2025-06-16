import 'dotenv/config';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { loadConfig } from './config/index';
import { TelegramNotifier } from './notifier/telegram';
import { startWatcher } from './watcher/index';
import { ConsoleLogger } from './utils/logger';

(async () => {
  const argv = await yargs(hideBin(process.argv)).options({
    config: { type: 'string', default: '.ledgerwatcher.yml' }
  }).argv;

  const config = loadConfig(argv.config);
  const logger = new ConsoleLogger();

  config.wallets.forEach(wallet => {
    console.log(`👀 Starting watcher for ${wallet.name}`);
    const notifier = new TelegramNotifier(config.notifiers.telegram);
    startWatcher(wallet, config.poll_interval, notifier, logger);
  });
})();
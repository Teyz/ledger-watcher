import { fetchRecentTxs } from './etherscan';
import { Wallet } from '../config';
import { Notifier } from '../notifier/types';
import { Logger } from '../utils/logger';

export async function startWatcher(
  wallet: Wallet,
  interval: number,
  notifier: Notifier,
  logger: Logger
) {
  let lastChecked = Date.now();

  setInterval(async () => {
    try {
      const txs = await fetchRecentTxs(wallet.address);
      const recent = txs.filter(tx => tx.timestamp * 1000 > lastChecked);
      for (const tx of recent) {
        await notifier.send(`[${wallet.name}] Tx: ${tx.hash} ${tx.value} ETH`);
      }
      lastChecked = Date.now();
    } catch (e) {
      logger.error(`Error while watching ${wallet.name}: ${e}`);
    }
  }, interval * 1000);
}
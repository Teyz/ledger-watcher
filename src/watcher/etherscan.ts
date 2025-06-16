import fetch from 'node-fetch';
import { Transaction } from '../types/tx';

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

type EtherscanTx = {
  hash: string;
  value: string;
  timeStamp: string;
  from: string;
  to: string;
};

type EtherscanResponse = {
  status: string;
  message: string;
  result: EtherscanTx[];
};

export async function fetchRecentTxs(address: string): Promise<Transaction[]> {
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=desc&apikey=${ETHERSCAN_API_KEY}`;
  const res = await fetch(url);

  const json = (await res.json()) as EtherscanResponse;

  if (json.status !== '1') {
    throw new Error('Etherscan API error');
  }

  return json.result.map((tx) => ({
    hash: tx.hash,
    value: parseFloat(tx.value) / 1e18,
    timestamp: Number(tx.timeStamp),
    from: tx.from,
    to: tx.to,
  }));
}

# 🛡️ Ledger Watcher

**Ledger Watcher** is a lightweight open-source CLI tool built in TypeScript to monitor on-chain activity of any wallet (Ledger or not) and send Telegram notifications when new transactions are detected.

> Ideal for tracking activity on your Ledger wallet or any crypto wallet.

---

## 🚀 Features

- 🔍 Automatically monitors Ethereum wallets
- 🧾 Detects incoming and outgoing transactions
- 🛎️ Sends real-time Telegram notifications
- ⚙️ Simple YAML-based configuration
- 🧪 Modular, type-safe code in TypeScript

---

## 📦 Tech Stack

- Node.js + TypeScript
- `ts-node` for development runtime
- `dotenv` for secret management
- `yargs` for CLI argument parsing
- Etherscan API for blockchain data

---

## 📁 Project Structure

```
ledger-watcher/
├── src/
│   ├── cli.ts                 # CLI entrypoint
│   ├── watcher/               # Transaction polling logic
│   ├── notifier/              # Telegram notification module
│   ├── config/                # YAML config loader
│   ├── utils/                 # Logger module
├── .ledgerwatcher.yml         # Config file
├── .env                       # API keys
├── tsconfig.json
├── package.json
```

---

## ⚙️ Installation

```bash
git clone https://github.com/yourname/ledger-watcher.git
cd ledger-watcher

# Install dependencies
yarn install

# Setup config files
cp .env.example .env
cp .ledgerwatcher.example.yml .ledgerwatcher.yml
```

---

## 🧪 `.env` file

Contains your Etherscan API key:

```
ETHERSCAN_API_KEY=your_etherscan_api_key
```

---

## 🧾 `.ledgerwatcher.yml` example

```yaml
wallets:
  - name: "Main Ledger Wallet"
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
    chain: ethereum

poll_interval: 60 # in seconds

notifiers:
  telegram:
    token: "YOUR_TELEGRAM_BOT_TOKEN"
    chat_id: "YOUR_CHAT_ID"
```

> You can monitor multiple wallets by adding more entries under `wallets`.

---

## 📤 How to find your Telegram `chat_id`

1. Create a bot via [@BotFather](https://t.me/BotFather)
2. Start a chat with your bot or add it to a group
3. Call:

```bash
curl "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates"
```

> The `chat.id` will appear in the response JSON.

---

## ▶️ Run the Watcher

```bash
# In dev mode
yarn dev

# Or directly
npx ts-node src/cli.ts
```

---

## 🧱 Compile to JavaScript

```bash
yarn build
```

Then:

```bash
node dist/cli.js
```

---

## 📍 Roadmap

- [x] Ethereum support
- [ ] Solana / Bitcoin support
- [ ] Slack / Email / Webhook notifications
- [ ] Web dashboard UI
- [ ] Executable binary via `pkg`

---

## 🤝 Contributing

Pull requests are welcome!  
Please open an issue first if you'd like to suggest major changes.

---

## 📜 License

MIT — free to use, modify, and fork ✌️

---

## 👨‍💻 Author

Made with ❤️ by [@yourname](https://github.com/yourname) — backend developer & crypto enthusiast

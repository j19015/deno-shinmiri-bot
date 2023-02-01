# Deno Simple Bot for LINE and Discord

This is a simple wrapper library for Deno to call the LINE Bot and Discord
Webhook.

## USAGE

main.ts source code

```ts
import discord from "https://raw.githubusercontent.com/takumi3488/deno-simple-bot/main/discord.ts";

await discord("<Webhook URL>", "some text");
```

cmd

```sh
WEBHOOK_URL="<Webhook URL>" deno run --allow-all  main.ts
```

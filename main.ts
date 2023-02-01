import discord from "./discord.ts";
await discord(
  Deno.env.get("WEBHOOK_URL"),
  "しんみりしてきましたねぇ",
  "Pancake",
  "https://free-materials.com/adm/wp-content/uploads/2019/12/adpDSC_2348-1024x683.jpg",
);

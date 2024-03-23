import env from "./configs/env.json";
import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { start } from "./controllers/commands";

// Telgram StringSession
const session: StringSession = new StringSession(env.stringSession);

// Telgeram client config
const client: TelegramClient = new TelegramClient(
    session,
    env.apiId,
    env.apiHash,
    {}
);

(async function run() {
    await client.connect();

    client.addEventHandler(async (event) => {
        const chatID: number = Number(event.message.chatId) || 254133712;

        if (event.message.message.startsWith("/start")) {
            start(client, chatID);
        }
    });
})();

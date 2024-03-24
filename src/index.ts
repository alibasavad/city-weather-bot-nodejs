import env from "./configs/env.json";
import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import * as command from "./controllers/commands";

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
            command.start(client, chatID);
        } else if (event.message.message.startsWith("/city")) {
            command.city(client, chatID, event.message.message);
        }
    });
})();

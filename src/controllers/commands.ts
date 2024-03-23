import { TelegramClient } from "telegram";

export function start(client: TelegramClient, chatID: number): void {
    client.sendMessage(chatID, {
        message: "Hi \nPlease input your city name",
    });
}

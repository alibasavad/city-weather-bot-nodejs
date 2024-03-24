import { TelegramClient } from "telegram";
import { getWeather } from "./weather-service";
import { weatherMessage } from "../utils/global";

export function start(client: TelegramClient, chatID: number): void {
    client.sendMessage(chatID, {
        message:
            'Hi \nPlease input your city name like this\n/city "city_name"',
    });
}

export async function city(
    client: TelegramClient,
    chatID: number,
    message: string
): Promise<void> {
    let cityName = message.substring(6);
    if (cityName === undefined) {
        client.sendMessage(chatID, {
            message: "please input a valid city name",
        });
    } else {
        client.sendMessage(chatID, {
            message: weatherMessage(await getWeather(cityName)),
        });
    }
}

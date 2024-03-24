import axios from "axios";
import env from "../configs/env.json";

export type WeatherData = {
    time: string;
    city: string;
    country: string;
    temp: number;
    status: string;
    feels_like: number;
    description: string;
    humidity: string;
};

export const getWeather = async (
    city: string
): Promise<WeatherData | string> => {
    const url: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${env.weatherApiKey}&units=metric`;

    let result: WeatherData | string = await axios
        .get(url)
        .then((res) => {
            return {
                time: res.data.list[0].dt_txt,
                city: res.data.city.name,
                country: res.data.city.country,
                temp: Math.round(res.data.list[0].main.temp),
                status: res.data.list[0].weather[0].main,
                feels_like: Math.round(res.data.list[0].main.feels_like),
                description: res.data.list[0].weather[0].description,
                humidity: res.data.list[0].main.humidity + "%",
            };
        })
        .catch((err) => {
            if (
                err.response &&
                err.response.data.message === "city not found"
            ) {
                return "city not found";
            } else return "somthing went wrong please try again";
        });
    return result;
};

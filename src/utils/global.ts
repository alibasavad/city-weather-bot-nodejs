import { WeatherData } from "../controllers/weather-service";

export const weatherMessage = (weatherData: WeatherData | string): string => {
    if (typeof weatherData === "string") {
        return weatherData;
    }
    let result = `time:---------------->${weatherData.time}\ncity:---------------->${weatherData.city}\ncountry:------------->${weatherData.country}\ntemperature:--------->${weatherData.temp}\nstatus:-------------->${weatherData.status}\nfeels like:---------->${weatherData.feels_like}\ndescription:--------->${weatherData.description}\nhumidity:------------>${weatherData.humidity}`;
    return result;
};

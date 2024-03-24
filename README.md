
# Welcom to CityWeatherBot

This is a simple telegram bot to get weather information from [openweathermap.org](https://openweathermap.org/).

Currently, this robot returns information about the current weather condition of a city just by taking the name of the city

In the future, I plan to implement more features to this bot such as:
- Better appearance
- More information of weather data
- More userfreindly environment

I hope you enjoy using CityWeatherBot! Let me know if you encounter any issues or have suggestions for improvements.
## Demo

![Demo GIF](https://github.com/alibasavad/city-weather-bot-nodejs/raw/develope/public/ezgif-3-d468906f05.gif)

## Getting Started

1. Clone the repository:
```clone
git clone https://github.com/alibasavad/city-weather-bot-nodejs
```
2. Navigate to the project directory:
```navigate
cd city-weather-bot-nodejs
```
3. Install the packages:
```package
npm install
```
4. Make a "configs" folder in "src" folder and create a "env.json" file in it. Add this configs in "env.json" file:
```JSON
{
 "stringSession": "Put your StringSession",    
 "apiId": "Put your ApiId",                  
 "apiHash": "Put your ApiHash",          
 "weatherApiKey" : "Put your Api Key"  
}
```

5. Run the application:
```run
npm  start
```

6. Open your telegram and start the bot
```start
/start
```
After that put name of the city after this command
```city
/city "city_name" 
```
### Configs
- apiHash and apiId : [Obtaining api_id](https://core.telegram.org/api/obtaining_api_id#:~:text=Log%20in%20to%20your%20Telegram%20core%3A%20https%3A%2F%2Fmy.telegram.org.%20Go,api_id%20and%20api_hash%20parameters%20required%20for%20user%20authorization.)
- stringSession : [Get stringsession: Logging in as a Bot](https://gram.js.org/getting-started/authorization#logging-in-as-a-bot)
- weatherApiKey : Sign in inside [openweathermap.org](https://openweathermap.org/) and get a apikey

###
#### Node version

This project has been started with Node v18.17.1

#### Acknowledgements

Many thanks to the creators of and Node.js, Gramjs and axios for making such amazing tools available to the developer community.

### 🔗 My Linkdin
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ali-basavad-3a6871204/)

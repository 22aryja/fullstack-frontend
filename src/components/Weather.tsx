import type { WeatherResponse } from '@/types/weather';
import { useEffect, useState } from 'react';

const API_KEY: string = 'd24d07931dddb752d53c5cf6163594c5';

const Weather = () => {
    const [weatherData, setWeatherData] = useState<WeatherResponse | null>(
        null
    );

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=London&APIkey=${API_KEY}&units=metric`
        )
            .then((response) => response.json())
            .then((result: WeatherResponse) => {
                setWeatherData(result);
            })
            .catch((err) => console.error(err));
    }, []);

    if (weatherData) {
        return (
            <>
                <p>Temperature: {weatherData.main.temp} °C</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="Weather icon"
                />
            </>
        );
    } else {
        return <>Loading...</>;
    }
};

export default Weather;

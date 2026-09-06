const WMO_CODES = {
  // 0-3: clear sky through to fully overcast
  0: {
    condition: "clear",
    description: "Clear sky",
    label: "Clear Sky",
    icon: "clear",
  },
  1: {
    condition: "partly_cloudy",
    description: "Mainly clear",
    label: "Partly Cloudy",
    icon: "partly_cloudy",
  },
  2: {
    condition: "partly_cloudy",
    description: "Partly cloudy",
    label: "Partly Cloudy",
    icon: "partly_cloudy",
  },
  3: {
    condition: "cloudy",
    description: "Overcast",
    label: "Cloudy",
    icon: "cloudy",
  },

  // 45-48: fog
  45: { condition: "fog", description: "Fog", label: "Foggy", icon: "fog" },
  48: {
    condition: "fog",
    description: "Depositing rime fog",
    label: "Foggy",
    icon: "fog",
  },

  // 51-57: drizzle (light steady rain), and drizzle that freezes on contact
  51: {
    condition: "drizzle",
    description: "Light drizzle",
    label: "Drizzle",
    icon: "rain",
  },
  53: {
    condition: "drizzle",
    description: "Moderate drizzle",
    label: "Drizzle",
    icon: "rain",
  },
  55: {
    condition: "drizzle",
    description: "Dense drizzle",
    label: "Drizzle",
    icon: "rain",
  },
  56: {
    condition: "freezing_rain",
    description: "Light freezing drizzle",
    label: "Freezing Rain",
    icon: "rain",
  },
  57: {
    condition: "freezing_rain",
    description: "Dense freezing drizzle",
    label: "Freezing Rain",
    icon: "rain",
  },

  // 61-67: rain, and rain that freezes on contact
  61: {
    condition: "rain",
    description: "Slight rain",
    label: "Rain",
    icon: "rain",
  },
  63: {
    condition: "rain",
    description: "Moderate rain",
    label: "Rain",
    icon: "rain",
  },
  65: {
    condition: "rain",
    description: "Heavy rain",
    label: "Rain",
    icon: "rain",
  },
  66: {
    condition: "freezing_rain",
    description: "Light freezing rain",
    label: "Freezing Rain",
    icon: "rain",
  },
  67: {
    condition: "freezing_rain",
    description: "Heavy freezing rain",
    label: "Freezing Rain",
    icon: "rain",
  },

  // 71-77: snow fall
  71: {
    condition: "snow",
    description: "Slight snow fall",
    label: "Snow",
    icon: "snow",
  },
  73: {
    condition: "snow",
    description: "Moderate snow fall",
    label: "Snow",
    icon: "snow",
  },
  75: {
    condition: "snow",
    description: "Heavy snow fall",
    label: "Snow",
    icon: "snow",
  },
  77: {
    condition: "snow",
    description: "Snow grains",
    label: "Snow",
    icon: "snow",
  },

  // 80-86: showers (short bursts of rain or snow)
  80: {
    condition: "showers",
    description: "Slight rain showers",
    label: "Rain Showers",
    icon: "rain",
  },
  81: {
    condition: "showers",
    description: "Moderate rain showers",
    label: "Rain Showers",
    icon: "rain",
  },
  82: {
    condition: "showers",
    description: "Violent rain showers",
    label: "Rain Showers",
    icon: "rain",
  },
  85: {
    condition: "snow",
    description: "Slight snow showers",
    label: "Snow",
    icon: "snow",
  },
  86: {
    condition: "snow",
    description: "Heavy snow showers",
    label: "Snow",
    icon: "snow",
  },

  // 95-99: thunderstorms
  95: {
    condition: "thunderstorm",
    description: "Thunderstorm",
    label: "Thunderstorm",
    icon: "storm",
  },
  96: {
    condition: "thunderstorm",
    description: "Thunderstorm with slight hail",
    label: "Thunderstorm",
    icon: "storm",
  },
  99: {
    condition: "thunderstorm",
    description: "Thunderstorm with heavy hail",
    label: "Thunderstorm",
    icon: "storm",
  },
};

export const getWeather = async (plcae) => {
  //   console.log("Functions", plcae);
  const { lat, lon } = plcae;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,rain,apparent_temperature,is_day`;

  const result = await fetch(url);
  //   console.log(await result.json());
  const data = await result.json();
  const now = data.current;
  // console.log(now.weather_code);
  if (!now) {
    throw new Error("Weather detials get failed");
  }

  // weather.name = weather["name"]

  const weather = WMO_CODES[now.weather_code];

  const icon =
    weather.icon === "clear" && now.is_day === 0 ? "clear_night" : weather.icon;

  return {
    temperature: Math.round(now.temperature_2m),
    humidity: now.relative_humidity_2m,
    windSpeed: Math.round(now.wind_speed_10m),
    feelsLike: Math.round(now.apparent_temperature),
    condition: weather.condition,
    description: weather.description,
    conditionLabel: weather.label,
    icon,
  };
};

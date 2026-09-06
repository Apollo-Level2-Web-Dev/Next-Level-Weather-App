const Rain = ["rain", "drizzle", "freezing_rain", "showers", "thunderstorm"];

export function getRecommandations(weather) {
  if (!weather) return null;

  // 1. Weather you need to prepare for.
  if (weather.condition === "snow") {
    return {
      type: "snow",
      label: "Snow Alert",
      text: "It's snowing. Wear warm clothes and take it slow outside.",
    };
  }
  if (Rain.includes(weather.condition)) {
    return {
      type: "rain",
      label: "Rain Alert",
      text: "It's raining. Don't forget to take an umbrella with you.",
    };
  }
  if (weather.condition === "fog") {
    return {
      type: "fog",
      label: "Fog Alert",
      text: "It's foggy. Drive carefully and keep some distance from other vehicles.",
    };
  }

  // 2. Temperatures worth warning about (in °C).
  if (weather.temperature >= 32) {
    return {
      type: "hot",
      label: "Hot Day",
      text: "It's quite hot today. Take a water bottle with you.",
    };
  }
  if (weather.temperature <= 15) {
    return {
      type: "cold",
      label: "Cold Day",
      text: "It's cold today. Wear warm clothes before heading out.",
    };
  }
  if (weather.temperature >= 28) {
    return {
      type: "warm",
      label: "Warm Day",
      text: "It's warm today. Take some water with you.",
    };
  }

  // 3. Comfortable temperature, so just describe the sky.
  if (weather.condition === "clear") {
    return {
      type: "sunny",
      label: "Sunny Day",
      text: "Sunny skies ahead. Take water and consider carrying sunglasses.",
    };
  }
  if (weather.condition === "partly_cloudy" || weather.condition === "cloudy") {
    return {
      type: "cloudy",
      label: "Cloudy Day",
      text: "Mostly cloudy today. A light jacket might come in handy.",
    };
  }

  // 4. Nothing special to report.
  return {
    type: "pleasant",
    label: "Perfect Day",
    text: "The weather looks comfortable today. Enjoy your day!",
  };
}

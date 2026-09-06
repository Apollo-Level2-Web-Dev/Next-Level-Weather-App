import { Clock, Thermometer } from "lucide-react";
import WeatherLottie from "./WeatherLottie";
import { getWeatherTheme } from "../utils/weatherTheme";


export default function WeatherScene({ weather, locationName }) {

  const theme = getWeatherTheme(weather.icon);

  const chipClass =
    "inline-flex items-center gap-2 text-[13px] font-semibold rounded-full px-[14px] py-2";

  return (
    <section
      className="relative overflow-hidden w-full rounded-card shadow-lg-soft ring-1 ring-inset ring-white/40 px-7 py-8 max-[480px]:px-5 max-[480px]:py-6 animate-rise [animation-delay:80ms]"
      style={{ background: theme.sky }}
    >
      <span
        className="absolute left-1/2 top-[42%] w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none"
        style={{ background: theme.accent, opacity: 0.24 }}
        aria-hidden="true"
      />
      <span
        className="absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-white opacity-40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center text-center">
        <span className="pill self-start" style={{ background: theme.chip, color: theme.ink }}>
          <span className="w-[7px] h-[7px] rounded-full bg-current animate-pulse" />
          Live in {locationName}
        </span>

        <WeatherLottie
          kind="weather"
          name={weather.icon}
          className="my-1 w-[270px] h-[270px] max-[480px]:w-[190px] max-[480px]:h-[190px]"
        />

        <h3
          className="font-display text-[32px] max-[480px]:text-[25px] font-bold leading-tight m-0"
          style={{ color: theme.ink }}
        >
          {weather.conditionLabel}
        </h3>
        <p className="text-[15px] mt-1 mb-5 m-0" style={{ color: theme.inkSoft }}>
          {weather.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <span className={chipClass} style={{ background: theme.chip, color: theme.ink }}>
            <Thermometer size={15} strokeWidth={2.5} />
            Feels like {weather.feelsLike}°C
          </span>
          {/* The API only sends a time when it has one, so the chip is only
              shown when we actually got one. */}
          {weather.updatedAt && (
            <span className={chipClass} style={{ background: theme.chip, color: theme.ink }}>
              <Clock size={15} strokeWidth={2.5} />
              Updated {weather.updatedAt}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
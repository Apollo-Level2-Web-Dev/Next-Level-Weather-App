import { Droplet, MapPin, Thermometer, Wind } from "lucide-react";
import { getWeatherTheme } from "../utils/getTheme";

export default function WeatherCard({ place, weather }) {
 

  const theme = getWeatherTheme(weather?.icon);

  const stats = [
    { icon: Thermometer, label: "Feels like", value: `${weather?.feelsLike}°C` },
    { icon: Droplet, label: "Humidity", value: `${weather?.humidity}%` },
    { icon: Wind, label: "Wind speed", value: `${weather?.windSpeed} km/h` },
  ];

  return (
    <section className="rounded-2xl shadow-2xl relative overflow-hidden p-8 max-[480px]:p-6 animate-rise">
      {/* A hint of the weather colour in the corner of the white card. */}
      <span
        className="absolute -top-24 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: theme.accent, opacity: 0.16 }}
        aria-hidden="true"
      />

      <div className="relative">
        <span className="pill bg-sky-soft text-sky-deep">Today's weather</span>

        <h2 className="flex items-center gap-2 font-display text-[28px] max-[480px]:text-[24px] font-bold mt-4 mb-0 m-0">
          <MapPin size={21} strokeWidth={2.5} className="text-sky flex-shrink-0" />
          {place.name}
        </h2>

        <div className="flex items-end gap-5 mt-6 mb-7 max-[380px]:flex-col max-[380px]:items-start max-[380px]:gap-2">
          <span
            className="font-display text-[100px] max-[480px]:text-[78px] font-extrabold tracking-tightx leading-[0.82]"
            style={{ color: theme.strong }}
          >
            {weather?.temperature}
            <span className="text-[52px] max-[480px]:text-[40px] align-top">°</span>
          </span>
          <div className="pb-2">
            {/* Short headline, e.g. "Rain" */}
            <span className="block font-display text-[21px] font-bold">{weather?.conditionLabel}</span>
            {/* Exact meaning of the weather code, e.g. "Heavy rain" */}
            <span className="block text-[14px] text-slate">{weather?.description}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 max-[560px]:grid-cols-1">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-[#f7fafe] border border-line rounded-[18px] px-4 py-[14px] transition-colors hover:bg-sky-soft hover:border-sky-light"
            >
              <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[11px] bg-sky-soft text-sky-deep flex-shrink-0">
                <Icon size={17} strokeWidth={2.25} />
              </span>
              <div className="min-w-0">
                <span className="block text-[11.5px] font-semibold text-slate">{label}</span>
                <span className="block text-[16px] font-bold leading-tight">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
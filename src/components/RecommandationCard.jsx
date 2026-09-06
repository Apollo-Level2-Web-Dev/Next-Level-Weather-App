import WeatherLottie from "./WeatherLottie";

const REC_STYLES = {
  hot: { color: "#f97316", card: "bg-rec-hot" },
  warm: { color: "#fb923c", card: "bg-rec-warm" },
  cold: { color: "#38bdf8", card: "bg-rec-cold" },
  sunny: { color: "#f59e0b", card: "bg-rec-sunny" },
  rain: { color: "#3b82f6", card: "bg-rec-rain" },
  snow: { color: "#818cf8", card: "bg-rec-snow" },
  fog: { color: "#94a3b8", card: "bg-rec-fog" },
  cloudy: { color: "#64748b", card: "bg-rec-cloudy" },
  pleasant: { color: "#22c55e", card: "bg-rec-pleasant" },
};


export default function RecommendationCard({ recommendation }) {
  console.log(recommendation);
    
  if (!recommendation) return null;
  // student = {name : "A"} => student.name = value => student["name"] = value
  const style = REC_STYLES[recommendation.type] || REC_STYLES.pleasant; 


  return (
    <section
      className={`flex items-start gap-[18px] w-full rounded-2xl border-l-[5px] border-solid shadow-2xl p-7 max-[480px]:p-5 transition-transform duration-200 hover:-translate-y-1 animate-rise [animation-delay:160ms] ${style.card}`}
      style={{ borderLeftColor: style.color }}
    >
      <span className="inline-flex items-center justify-center w-[64px] h-[64px] rounded-[20px] bg-white/90 ring-1 ring-white shadow-sm-soft flex-shrink-0">
      {/* Lottie Animations */}
        <WeatherLottie kind="advice" name={recommendation?.type} className="w-[46px] h-[46px]" />
      </span>
      <div>
        <div className="flex items-center gap-3 mb-2 max-[480px]:flex-wrap">
          <span
            className="text-[11px] font-bold uppercase tracking-widebadge text-white rounded-full px-3 py-1"
            style={{ background: style.color }}
          >
            {recommendation?.label}
          </span>
          <h3 className="text-[12.5px] font-bold tracking-widelabel3 uppercase text-slate m-0">
            Your smart suggestion
          </h3>
        </div>
        <p className="text-[17.5px] font-semibold leading-[1.55] text-navy m-0">
          {recommendation?.text}
        </p>
      </div>
    </section>
  );
}
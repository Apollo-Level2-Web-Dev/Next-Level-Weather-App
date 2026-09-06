import WeatherLottie from "./WeatherLottie";

const Loader = () => {
    return (
       <div className="flex justify-center">
            <div className="panel animate-rise">
              <WeatherLottie kind="weather" name="cloudy" className="w-[110px] h-[110px] mx-auto" />
              <p className="text-[16px] font-semibold text-slate mt-2 mb-0">Getting your weather...</p>
            </div>
          </div>
    );
};

export default Loader;
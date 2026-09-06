import { LottieLight } from "lottie-react";

export default function WeatherLottie({ kind, name, className = "" }) {
  return (
    <LottieLight src={`/animations/${kind}/${name}.json`} className={className} autoplay loop />
  );
}
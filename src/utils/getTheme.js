const THEMES = {
  clear: {
    sky: "linear-gradient(160deg, #fff8e1 0%, #ffe6a8 55%, #ffd486 100%)",
    accent: "#f59e0b",
    strong: "#d97706",
    cloud: "#ffffff",
    ink: "#7c4a03",
    inkSoft: "rgba(124, 74, 3, 0.7)",
    chip: "rgba(255, 255, 255, 0.72)",
  },
  clear_night: {
    sky: "linear-gradient(160deg, #1b2551 0%, #2b3a75 55%, #3e4f95 100%)",
    accent: "#c7d2fe",
    strong: "#4f46e5",
    cloud: "#c7d2fe",
    ink: "#f8fafc",
    inkSoft: "rgba(248, 250, 252, 0.72)",
    chip: "rgba(255, 255, 255, 0.16)",
  },
  partly_cloudy: {
    sky: "linear-gradient(160deg, #eaf4ff 0%, #cfe4ff 55%, #b6d5fb 100%)",
    accent: "#f59e0b",
    strong: "#d97706",
    cloud: "#ffffff",
    ink: "#1d5fd1",
    inkSoft: "rgba(29, 95, 209, 0.7)",
    chip: "rgba(255, 255, 255, 0.75)",
  },
  cloudy: {
    sky: "linear-gradient(160deg, #f4f7fb 0%, #dde5f0 55%, #ccd7e6 100%)",
    accent: "#5b6b85",
    strong: "#475569",
    cloud: "#ffffff",
    ink: "#3d4f73",
    inkSoft: "rgba(61, 79, 115, 0.7)",
    chip: "rgba(255, 255, 255, 0.8)",
  },
  fog: {
    sky: "linear-gradient(160deg, #f5f8fb 0%, #e0e7ef 55%, #cbd5e1 100%)",
    accent: "#94a3b8",
    strong: "#64748b",
    cloud: "#ffffff",
    ink: "#475569",
    inkSoft: "rgba(71, 85, 105, 0.7)",
    chip: "rgba(255, 255, 255, 0.8)",
  },
  rain: {
    sky: "linear-gradient(160deg, #eef6ff 0%, #c7e0fb 55%, #a3caf7 100%)",
    accent: "#3b82f6",
    strong: "#2563eb",
    cloud: "#ffffff",
    ink: "#1d4ed8",
    inkSoft: "rgba(29, 78, 216, 0.7)",
    chip: "rgba(255, 255, 255, 0.75)",
  },
  snow: {
    sky: "linear-gradient(160deg, #f4fbff 0%, #dcf0fd 55%, #bfe4fb 100%)",
    accent: "#38bdf8",
    strong: "#0284c7",
    cloud: "#ffffff",
    ink: "#0369a1",
    inkSoft: "rgba(3, 105, 161, 0.7)",
    chip: "rgba(255, 255, 255, 0.8)",
  },
  storm: {
    sky: "linear-gradient(160deg, #eef0ff 0%, #d2d7f8 55%, #b4bcf2 100%)",
    accent: "#6366f1",
    strong: "#4f46e5",
    cloud: "#ffffff",
    ink: "#4338ca",
    inkSoft: "rgba(67, 56, 202, 0.7)",
    chip: "rgba(255, 255, 255, 0.72)",
  },
  unknown: {
    sky: "linear-gradient(160deg, #f4f7fb 0%, #dde5f0 55%, #ccd7e6 100%)",
    accent: "#64748b",
    strong: "#475569",
    cloud: "#ffffff",
    ink: "#3d4f73",
    inkSoft: "rgba(61, 79, 115, 0.7)",
    chip: "rgba(255, 255, 255, 0.8)",
  },
};

// Returns the theme for an icon name, or the neutral one for unknown names.

export function getWeatherTheme(icon) {
  return THEMES[icon] || THEMES.unknown;
}

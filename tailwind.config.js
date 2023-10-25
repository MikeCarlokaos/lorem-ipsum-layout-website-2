/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        beat: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2)" },
          "50%": { transform: "rotate(1)" },
          "75%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        dribble: {
          "0%": { top: "40px" },
          "50%": { top: "30px" },
          "100%": { top: "40px" },
        },
        slide: {
          "0%": { left: "0px" },
          "50%": { left: "10px" },
          "100%": { left: "0px" },
        },
      },
      animation: {
        beat: "beat 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        dribble: "dribble 2s linear infinite",
        slide: "slide 2s linear infinite",
      },
    },
  },
  plugins: [],
};

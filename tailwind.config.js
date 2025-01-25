/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#57623e",
          tint: "#abb19f",
          shade: "#3a4129",
        },
        secondary: {
          base: "#7c6f3b",
          tint: "#beb79d",
          shade: "#534a27",
        },
        gray: {
          0: "#ffffff",
          100: "#f2f2f2",
          200: "#e5e5e5",
          300: "#cccccc",
          400: "#b3b3b3",
          500: "#999999",
          600: "#808080",
          700: "#666666",
          800: "#4d4d4d",
          900: "#333333",
        },
        misc: {
          vanillaIce: "#eedada",
          periglacialBlue: "#e1e4d8",
          pearlBush: "#e5e1ce",
          doubleSpanishWhite: "#d6ddbd",
          moonMist: "#d6dec2",
          merino: "#f2f0e7",
        },
        states: {
          success: {
            base: "#2cd36f",
            tint: "#96e9b7",
            shade: "#1d8d4a",
          },
          warning: {
            base: "#f59e0b",
            tint: "#facf85",
            shade: "#7b4f06",
          },
          error: {
            base: "#ef4444",
            tint: "#f7a1a1",
            shade: "#782222",
          },
        },
      },
    },
  },
  plugins: [],
};

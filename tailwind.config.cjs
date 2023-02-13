/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#FECDCD",
          400: "#FD9191",
          500: "#FC6C6C",
          600: "#FB4040",
        },
        light: {
          200: "#F8F8FA",
          300: "#F5F6F8",
          400: "#E4E8EB",
          500: "#CBD0D6",
        },
        dark: {
          300: "#A9AFBB",
          400: "#656B77",
          500: "#414852",
          600: "#2D3239",
        },
        complementary: "#C8D7D2",
      },
    },
  },
  plugins: [],
};

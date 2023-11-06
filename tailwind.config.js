/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        30: "30px",
        40: "40px",
      },
      fontWeight: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      spacing: {
        1: "1px",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        24: "24px",
        30: "30px",
        35: "35px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        200: "200px",
      },
      borderWidth: {
        1: "1px",
      }
    },
  },
  plugins: [],
};

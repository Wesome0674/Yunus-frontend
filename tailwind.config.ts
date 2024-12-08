import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "4xl": [
        "400px",
        {
          fontWeight: "400",
        },
      ],
      "3xl": [
        "48px",
        {
          fontWeight: "400",
        },
      ],
      "2xl": [
        "40px",
        {
          lineHeight: "50px",
          fontWeight: "200",
        },
      ],
      xl: [
        "20px",
        {
          fontWeight: "500",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      bold: [
        "16px",
        {
          fontWeight: "700",
        },
      ],
      sm: [
        "14px",
        {
          fontWeight: "500",
        },
      ],
      tag: [
        "17.5px",
        {
          fontWeight: "600",
        },
      ],
      link: [
        "16px",
        {
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        red: "#B71129",
        green: "#036D41",
        blue: "#3BA2F9",
        cloud: "#F4F4F4",
        light: "#FCFCFC",
        primary: "#1D1D1F",
        secondary: "#AF7302",
        tercery: "#52525B",
        brown: "#6D4701",
        beige: "#F3EFE6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Cooper: ['"Cooper"'],
        AmbitRegular: ['"Ambit-regular"'],
        AmbitSemibold: ['"Ambit-semibold"'],
      },
    },
  },
  plugins: [],
};
export default config;

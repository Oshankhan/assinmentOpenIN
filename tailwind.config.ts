import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          background: "#EBEBEB", 
          text: "#111827",        
          primary: "#f9f9f9",     
          secondary: "#999CA0",
          border: "#D1D5DB"
        },
        // Dark theme colors
        dark: {
          background: "#161616", 
          text: "#f9f9f9",       
          primary: "black",    
          secondary: "#6b7280",  
           border: "#4B5563"
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('../public/images/main.jpg')",
        promo:
          "url('https://images.unsplash.com/photo-1586878341340-1971696a9b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
      },
    },
  },
  plugins: [],
} satisfies Config;

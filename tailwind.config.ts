import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: "#dc2626",
                    "red-dark": "#b91c1c",
                    "red-glow": "#ef4444",
                },
                dark: {
                    950: "#0a0a0a",
                    900: "#0f0f0f",
                    800: "#171717",
                    700: "#262626",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            boxShadow: {
                "red-glow": "0 0 20px rgba(220, 38, 38, 0.3)",
                "red-glow-lg": "0 0 40px rgba(220, 38, 38, 0.4)",
            },
        },
    },
    plugins: [],
};

export default config;

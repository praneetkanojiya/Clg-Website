/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#3b82f6', // Adjust based on actual theme
                    DEFAULT: '#1e3a8a', // Deep blue, common in college sites 
                    dark: '#1e40af',
                },
                secondary: {
                    light: '#fbbf24',
                    DEFAULT: '#f59e0b', // Gold/Yellow, derived from "Navy Gold Modern Circle Class Logo" mentioned in XML
                    dark: '#d97706',
                }
            },
        },
    },
    plugins: [],
};

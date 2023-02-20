/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            karla: ["Karla", "sans-serif"],
        },

        extend: {},
    },
    plugins: [require("tailwind-scrollbar-hide"), require("flowbite/plugin")],
};

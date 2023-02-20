import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "src"),
        },
    },
    plugins: [react()],
});

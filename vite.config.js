import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],

    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                coats: "src/pages/coats.html",
                pants: "src/pages/pants.html",
                tshirts: "src/pages/t-shirts.html",
                login: "src/pages/login.html",
                panel: "src/pages/panel.html",
            },
        },
    },
})
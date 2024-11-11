import { defineConfig } from "vite";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

export default defineConfig({
  server: {
    port: parseInt(process.env.VITE_DEV_SERVER_PORT || "5173", 10), // Parse string to number
  },
});

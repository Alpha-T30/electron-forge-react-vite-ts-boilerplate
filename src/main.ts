import { app, BrowserWindow } from "electron";
import path from "path";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Get the port from environment variables
  const VITE_DEV_SERVER_URL = `http://localhost:${
    process.env.VITE_DEV_SERVER_PORT || 5173
  }`;
  const VITE_BUILD_FOLDER = process.env.MAIN_WINDOW_VITE_NAME || "dist";

  // Load the URL in development or the index.html in production
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(VITE_DEV_SERVER_URL); // Use the shared port here
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${VITE_BUILD_FOLDER}/index.html`)
    );
  }

  // Open DevTools for debugging (optional)
  mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

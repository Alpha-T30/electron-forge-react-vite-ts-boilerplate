# Simple Electron (Electron Forge) React (Vite Typescript) Boilerplate With Tailwind CSS

### Technologies used in this project:

- **Electron Forge** : an all-in-one tool for packaging and distributing Electron applications
- **React**
- **Vite with Typescript**
- **Tailwind CSS**

## Guides to start the project from the beginning

#### 1. Install the dependencies:

```bash
npm install
```

#### 2. Starting the project:

For starting the project we need to start the vite sever first with:

```bash
npm run dev
```

After that open another terminal and start the electron project with:

```bash
npm start
```

### Some Aditional Important Suggestions:

- I included the .env file also If you want, you can change the `port` number there

- Don't forget to add the `.env` in the `.gitignore` file

- To ignore this error :

  "Request Autofill.setAddresses failed. {"code":-32601,"message":"'Autofill.setAddresses' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)

  You can comment this out from `main.ts` file

  ```js
  // Open DevTools for debugging (optional)
  mainWindow.webContents.openDevTools();
  ```

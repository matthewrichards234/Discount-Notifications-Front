import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./components/App.tsx";
import { DarkModeProvider } from "./context/DarkModeContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
);

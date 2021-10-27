import React from "react";
import { useTranslation } from "react-i18next";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const onClick: (lang: string) => (ev: React.MouseEvent) => void =
    (lang) => (ev) => {
      ev.preventDefault();
      i18n.changeLanguage(lang);
    };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("Hello")} - {t("Lang")}.
        </p>
        <a
          className="App-link"
          href="#"
          onClick={onClick("en")}
          rel="noopener noreferrer"
        >
          English
        </a>
        <a
          className="App-link"
          href="#"
          onClick={onClick("pt-BR")}
          rel="noopener noreferrer"
        >
          Português - Brasil
        </a>
        <a
          className="App-link"
          href="#"
          onClick={onClick("es")}
          rel="noopener noreferrer"
        >
          Español
        </a>
      </header>
    </div>
  );
}

export default App;

import { useTranslation } from "react-i18next";
import "./App.css";
import { useState } from "react";

function App() {
  const [locale, setLocale] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <h1>{t("greet")}</h1>
      <button
        onClick={() => {
          const local = locale === "en" ? "de" : "en";
          changeLanguage(local);
          setLocale(local);
        }}
      >
        Change Locale
      </button>
    </div>
  );
}

export default App;

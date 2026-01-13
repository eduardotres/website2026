import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./locales/pt-BR.json";
import enUS from "./locales/en-US.json";

const STORAGE_KEY = "app_lang";

const getInitialLanguage = (): string => {
  // 1. Check localStorage
  const storedLang = localStorage.getItem(STORAGE_KEY);
  if (storedLang && ["pt-BR", "en-US"].includes(storedLang)) {
    return storedLang;
  }

  // 2. Check browser language
  const browserLang = navigator.language;
  if (browserLang.startsWith("en")) {
    return "en-US";
  }

  // 3. Default to pt-BR
  return "pt-BR";
};

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": { translation: ptBR },
    "en-US": { translation: enUS },
  },
  lng: getInitialLanguage(),
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

// Persist language changes
i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from "./translation/en/global.json";
import global_az from "./translation/az/global.json";

const resources = {
    en: {
        translation: global_en
    },
    az: {
        translation: global_az
    },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
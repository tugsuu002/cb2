import React from "react";
import ReactDOM from "react-dom/client";
import i18next from 'i18next'
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {mn} from './assets/locales/mn'
import {en} from './assets/locales/en'
import "./index.css";
import App from "./App";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
  debug: false,
  fallbackLng: 'mn',
  lng: 'mn',
  load: 'languageOnly',
  whitelist: ['mn', 'en'],
  detection: {
    order: ['localstorage','session','cookie'],
    lookupFromPathIndex: 0,
    checkWhitelist: true
  },
  resources: {
    mn: {
      translation: mn,
    },
    en: {
      translation: en,
    }
  } 
  });


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

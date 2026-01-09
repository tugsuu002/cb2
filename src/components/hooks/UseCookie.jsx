import { useState } from "react";

const getItem = (key) => {
  return document.cookie.split("; ").reduce((total, currentCookie) => {
    const item = currentCookie.split("=");
    const storedKey = item[0];
    const storedValue = item[1];
    return key === storedKey ? JSON.parse(storedValue) : total;
  }, "");
};

const setItem = (key, value, numberOfDays) => {
  const now = new Date();

  // set the time to be now + numberOfDays
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
  document.cookie = `${key}=${JSON.stringify(
    value
  )}; expires=${now.toUTCString()}; path=/`;
};

/**
 *
 * @param {String} key The key to store our data to
 * @param {String} defaultValue The default value to return in case the cookie doesn't exist
 */
export const useCookie = (key, defaultValue = "") => {
  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());
  const updateCookie = (value, numberOfDays = 1) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };

  return [cookie, updateCookie];
};

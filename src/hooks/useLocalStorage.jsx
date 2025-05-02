import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      return (stored);
    } else {
      localStorage.setItem(key,initialValue);
      return initialValue;
    }
  });

  function updateStorage(newValue) {
    setData(newValue);
    localStorage.setItem(key,newValue);
  }

  return [data, updateStorage];
}                                                                                                                                   
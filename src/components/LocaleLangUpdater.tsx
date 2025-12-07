"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export function LocaleLangUpdater() {
  const { locale } = useParams();

  useEffect(() => {
    if (locale) {
      if (Array.isArray(locale)) {
        document.documentElement.lang = locale[0];
      } else {
        document.documentElement.lang = locale;
      }
    }
  }, [locale]);

  return null;
}

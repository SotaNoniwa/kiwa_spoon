import { useState, useEffect } from "react";

function LanguageSwitchButton({ lang }: any) {
  const [language, setLanguage] = useState(lang);

  useEffect(() => {
    // Initialize language state based on the <html> lang attribute
    const currentLang = document.documentElement.lang || "jp";
    setLanguage(currentLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "jp" ? "en" : "jp";

    // Update the <html> lang attribute
    document.documentElement.lang = newLang;

    // Update state
    setLanguage(newLang);

    // Redirect based on the toggled language
    window.location.href = newLang === "jp" ? "/" : "/en";
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 left-4 z-50 px-4 py-2 rounded-full border-2 border-blue-400 bg-white text-blue-600 font-medium hover:bg-blue-100 shadow-md"
    >
      {lang === "jp" ? "English" : "日本語"}
    </button>
  );
}

export default LanguageSwitchButton;

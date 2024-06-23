import { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { FaFlag } from "react-icons/fa";

const Ajustes = ({ onClose }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("es"); // Default language: Spanish

  const toggleDarkMode = () => {
    const body = document.body;
    setDarkMode(!darkMode);
    body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-boxdark p-4 rounded-lg shadow-lg w-96">
        <button
          className="top-2 ml-80 text-gray-600 dark:text-gray-400 bg-red-500 rounded-full p-1"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold text-black dark:text-white mt-2 mb-4">
          Ajustes
        </h2>
        <div className="mt-2 space-y-4 text-left items-center">
          <div className="flex justify-between items-center">
            <label className="block text-base font-medium text-black dark:text-white">
              Modo Oscuro
            </label>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                darkMode ? "bg-blue-900" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-base font-medium text-black dark:text-white">
              Notificaciones
            </label>
            <button
              onClick={toggleNotifications}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notificationsEnabled ? "bg-blue-900" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notificationsEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajustes;

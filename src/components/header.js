import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // 언어 변경
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-yellow-500 hover:text-yellow-600 transition-colors truncate">
          🍳 Recipe App
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex gap-2 sm:gap-3 items-center">
            <Link to="/login" className="bg-yellow-500 text-white font-semibold py-1.5 px-3 text-xs sm:py-2 sm:px-4 sm:text-sm rounded-md hover:bg-yellow-600 transition-colors">
              로그인
            </Link>
            <Link to="/signup" className="bg-green-500 text-white font-semibold py-1.5 px-3 text-xs sm:py-2 sm:px-4 sm:text-sm rounded-md hover:bg-green-600 transition-colors">
              회원가입
            </Link>
          </div>
          <div className="flex gap-2">
            <button onClick={() => changeLanguage('ko')} className="text-sm font-semibold text-gray-500 hover:text-yellow-600">
              KO
            </button>
            <button onClick={() => changeLanguage('en')} className="text-sm font-semibold text-gray-500 hover:text-yellow-600">
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
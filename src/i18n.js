// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 다국어 리소스
const resources = {
  ko: {
    translation: {
      "오늘 뭐 먹지?": "오늘 뭐 먹지?",
      "버튼을 눌러 오늘의 특별한 레시피를 추천받아보세요!": "버튼을 눌러 오늘의 특별한 레시피를 추천받아보세요!",
      "맛있는 레시피를 불러오는 중...": "맛있는 레시피를 불러오는 중...",
      "다른 레시피 추천!": "다른 레시피 추천!",
      "레시피 추가하기": "레시피 추가하기",
      "모든 레시피": "모든 레시피",
      "레시피 이름으로 검색...": "레시피 이름으로 검색...",
      "최신순": "최신순",
      "인기순": "인기순",
      "평점순": "평점순",
      "리뷰 많은 순": "리뷰 많은 순",
      "표시할 레시피가 없습니다.": "표시할 레시피가 없습니다.",
      "에 대한 검색 결과가 없습니다.": "에 대한 검색 결과가 없습니다.",
      "오늘의 요리 팁을 확인해보세요!": "오늘의 요리 팁을 확인해보세요!",
      "레시피 데이터를 불러오는 데 실패했습니다.": "레시피 데이터를 불러오는 데 실패했습니다."
    }
  },
  en: {
    translation: {
      "오늘 뭐 먹지?": "What should I eat today?",
      "버튼을 눌러 오늘의 특별한 레시피를 추천받아보세요!": "Click the button to get today's special recipe!",
      "맛있는 레시피를 불러오는 중...": "Loading delicious recipes...",
      "다른 레시피 추천!": "Recommend another recipe!",
      "레시피 추가하기": "Add a Recipe",
      "모든 레시피": "All Recipes",
      "레시피 이름으로 검색...": "Search by recipe name...",
      "최신순": "Latest",
      "인기순": "Popular",
      "평점순": "Rating",
      "리뷰 많은 순": "Most Reviewed",
      "표시할 레시피가 없습니다.": "No recipes to display.",
      "에 대한 검색 결과가 없습니다.": "No results found for",
      "오늘의 요리 팁을 확인해보세요!": "Check out today's cooking tip!",
      "레시피 데이터를 불러오는 데 실패했습니다.": "Failed to load recipe data."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

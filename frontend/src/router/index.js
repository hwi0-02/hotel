import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/MyWebpage.vue'; // 보여줄 페이지(컴포넌트)들을 가져옵니다.
import About from '../components/Reservation.vue';

// 1. 라우트(경로) 정의
// 각 경로는 하나의 컴포넌트와 매핑됩니다.
const routes = [
  {
    path: '/',          // URL 경로
    name: 'Home',       // 라우트 이름
    component: Home     // 이 경로에서 보여줄 컴포넌트
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

// 2. 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(), // HTML5 History API 모드 사용
  routes, // `routes: routes`와 동일
});

// 3. 라우터 인스턴스 내보내기
export default router;
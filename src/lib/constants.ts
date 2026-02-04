import type { ArtworkCategory, SortOption } from '@/types';

/**
 * 카테고리 목록 및 레이블
 */
export const CATEGORIES: Record<ArtworkCategory, { ja: string; en: string }> = {
  character: { ja: 'キャラクター', en: 'Character' },
  background: { ja: '背景', en: 'Background' },
  commission: { ja: 'コミッション', en: 'Commission' },
  fanart: { ja: 'ファンアート', en: 'Fan Art' },
  original: { ja: 'オリジナル', en: 'Original' },
  concept: { ja: 'コンセプトアート', en: 'Concept Art' },
};

/**
 * 정렬 옵션 레이블
 */
export const SORT_OPTIONS: Record<SortOption, { ja: string; en: string }> = {
  latest: { ja: '最新順', en: 'Latest' },
  oldest: { ja: '古い順', en: 'Oldest' },
  title: { ja: 'タイトル順', en: 'Title' },
  popular: { ja: '人気順', en: 'Popular' },
};

/**
 * 반응형 브레이크포인트
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * 그리드 열 개수
 */
export const GRID_COLUMNS = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
  wide: 4,
} as const;

/**
 * 애니메이션 설정
 */
export const ANIMATION = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeIn: 'cubic-bezier(0.7, 0, 0.84, 0)',
    easeInOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
  },
} as const;

/**
 * Intersection Observer 옵션
 */
export const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '50px',
  threshold: 0.01,
};
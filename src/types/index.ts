/**
 * 작품(Artwork) 타입 정의
 */
export interface Artwork {
  /** 고유 ID */
  id: string;
  /** 작품 제목 */
  title: string;
  /** 작품 설명 */
  description: string;
  /** 썸네일 이미지 URL */
  thumbnail: string;
  /** 고해상도 이미지 URL */
  fullImage: string;
  /** 카테고리 */
  category: ArtworkCategory;
  /** 태그 목록 */
  tags: string[];
  /** 제작 연도 */
  year: number;
  /** 제작 월 (1-12) */
  month?: number;
  /** 제작 일 (1-31) */
  day?: number;
  /** 사용된 기술/도구 */
  tools?: string[];
  /** 작품 너비 (픽셀) */
  width: number;
  /** 작품 높이 (픽셀) */
  height: number;
  /** 좋아요 수 (선택적) */
  likes?: number;
}

/**
 * 작품 카테고리
 */
export type ArtworkCategory = 
  | 'character'
  | 'background'
  | 'commission'
  | 'fanart'
  | 'original'
  | 'concept';

/**
 * 정렬 옵션
 */
export type SortOption = 'latest' | 'oldest' | 'title' | 'popular';

/**
 * 필터 상태
 */
export interface FilterState {
  /** 선택된 카테고리 목록 */
  categories: ArtworkCategory[];
  /** 검색어 */
  searchTerm: string;
  /** 정렬 옵션 */
  sortBy: SortOption;
}

/**
 * 테마 타입
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * 언어 타입
 */
export type Language = 'ja' | 'en';

/**
 * 소셜 미디어 링크
 */
export interface SocialLink {
  /** 플랫폼 이름 */
  platform: 'twitter' | 'pixiv' | 'instagram' | 'artstation' | 'github';
  /** URL */
  url: string;
  /** 표시 여부 */
  visible: boolean;
}

/**
 * 작가 정보
 */
export interface ArtistInfo {
  /** 이름 */
  name: string;
  /** 닉네임/아티스트명 */
  artistName: string;
  /** 프로필 이미지 */
  avatar: string;
  /** 소개 */
  bio: string;
  /** 경력 정보 */
  experience: string[];
  /** 작업 스타일 */
  workStyle: string;
  /** 연락처 이메일 */
  email: string;
  /** 소셜 미디어 링크 */
  socialLinks: SocialLink[];
}

/**
 * 연락 폼 데이터
 */
export interface ContactFormData {
  /** 이름 */
  name: string;
  /** 이메일 */
  email: string;
  /** 제목 */
  subject: string;
  /** 메시지 */
  message: string;
}
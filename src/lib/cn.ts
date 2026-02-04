import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS 클래스를 병합하는 유틸리티 함수
 * clsx로 조건부 클래스 처리 후 tailwind-merge로 중복 제거
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
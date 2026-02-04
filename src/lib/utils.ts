import type { Artwork, SortOption } from '@/types';

/**
 * 작품 목록을 정렬
 */
export function sortArtworks(artworks: Artwork[], sortBy: SortOption): Artwork[] {
  const sorted = [...artworks];

  switch (sortBy) {
    case 'latest':
      return sorted.sort((a, b) => {
        const dateA = new Date(a.year, (a.month || 1) - 1, a.day || 1);
        const dateB = new Date(b.year, (b.month || 1) - 1, b.day || 1);
        return dateB.getTime() - dateA.getTime();
      });

    case 'oldest':
      return sorted.sort((a, b) => {
        const dateA = new Date(a.year, (a.month || 1) - 1, a.day || 1);
        const dateB = new Date(b.year, (b.month || 1) - 1, b.day || 1);
        return dateA.getTime() - dateB.getTime();
      });

    case 'title':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    case 'popular':
      return sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0));

    default:
      return sorted;
  }
}

/**
 * 작품 검색 필터링
 */
export function filterArtworksBySearch(artworks: Artwork[], searchTerm: string): Artwork[] {
  if (!searchTerm.trim()) return artworks;

  const term = searchTerm.toLowerCase();
  return artworks.filter(
    (artwork) =>
      artwork.title.toLowerCase().includes(term) ||
      artwork.description.toLowerCase().includes(term) ||
      artwork.tags.some((tag) => tag.toLowerCase().includes(term))
  );
}

/**
 * 작품 카테고리 필터링
 */
export function filterArtworksByCategories(
  artworks: Artwork[],
  categories: string[]
): Artwork[] {
  if (categories.length === 0) return artworks;
  return artworks.filter((artwork) => categories.includes(artwork.category));
}

/**
 * Debounce 함수
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * 날짜 포맷팅
 */
export function formatDate(year: number, month?: number, day?: number, locale = 'ja'): string {
  if (month && day) {
    return new Date(year, month - 1, day).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } else if (month) {
    return new Date(year, month - 1).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
    });
  } else {
    return `${year}`;
  }
}

/**
 * 이미지 종횡비 계산
 */
export function getAspectRatio(width: number, height: number): number {
  return width / height;
}

/**
 * 반응형 이미지 srcset 생성
 */
export function generateSrcSet(baseUrl: string, widths: number[]): string {
  return widths
    .map((width) => `${baseUrl}?w=${width} ${width}w`)
    .join(', ');
}

/**
 * 로컬 스토리지에 안전하게 저장
 */
export function safeLocalStorage() {
  const isAvailable = typeof window !== 'undefined' && window.localStorage;

  return {
    getItem: (key: string): string | null => {
      if (!isAvailable) return null;
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    setItem: (key: string, value: string): void => {
      if (!isAvailable) return;
      try {
        window.localStorage.setItem(key, value);
      } catch {
        // 무시
      }
    },
    removeItem: (key: string): void => {
      if (!isAvailable) return;
      try {
        window.localStorage.removeItem(key);
      } catch {
        // 무시
      }
    },
  };
}
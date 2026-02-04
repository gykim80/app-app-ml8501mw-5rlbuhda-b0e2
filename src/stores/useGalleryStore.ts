import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ArtworkCategory, SortOption, FilterState } from '@/types';

interface GalleryState extends FilterState {
  // 라이트박스 상태
  lightboxArtworkId: string | null;

  // 액션
  setCategories: (categories: ArtworkCategory[]) => void;
  toggleCategory: (category: ArtworkCategory) => void;
  clearCategories: () => void;
  setSearchTerm: (term: string) => void;
  setSortBy: (sortBy: SortOption) => void;
  openLightbox: (artworkId: string) => void;
  closeLightbox: () => void;
  resetFilters: () => void;
}

export const useGalleryStore = create<GalleryState>()(
  devtools(
    (set) => ({
      // 초기 상태
      categories: [],
      searchTerm: '',
      sortBy: 'latest',
      lightboxArtworkId: null,

      // 카테고리 필터
      setCategories: (categories) => set({ categories }),
      toggleCategory: (category) =>
        set((state) => ({
          categories: state.categories.includes(category)
            ? state.categories.filter((c) => c !== category)
            : [...state.categories, category],
        })),
      clearCategories: () => set({ categories: [] }),

      // 검색
      setSearchTerm: (searchTerm) => set({ searchTerm }),

      // 정렬
      setSortBy: (sortBy) => set({ sortBy }),

      // 라이트박스
      openLightbox: (artworkId) => set({ lightboxArtworkId: artworkId }),
      closeLightbox: () => set({ lightboxArtworkId: null }),

      // 필터 초기화
      resetFilters: () =>
        set({
          categories: [],
          searchTerm: '',
          sortBy: 'latest',
        }),
    }),
    { name: 'GalleryStore' }
  )
);

// 선택적 구독을 위한 selector
export const useFilterState = () =>
  useGalleryStore((state) => ({
    categories: state.categories,
    searchTerm: state.searchTerm,
    sortBy: state.sortBy,
  }));

export const useLightboxState = () =>
  useGalleryStore((state) => ({
    lightboxArtworkId: state.lightboxArtworkId,
    openLightbox: state.openLightbox,
    closeLightbox: state.closeLightbox,
  }));
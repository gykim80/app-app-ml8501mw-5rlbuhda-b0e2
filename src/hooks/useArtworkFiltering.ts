import { useMemo } from 'react';
import type { Artwork } from '@/types';
import {
  sortArtworks,
  filterArtworksBySearch,
  filterArtworksByCategories,
} from '@/lib/utils';
import { useFilterState } from '@/stores/useGalleryStore';

/**
 * 작품 필터링 및 정렬을 처리하는 Hook
 */
export function useArtworkFiltering(artworks: Artwork[]) {
  const { categories, searchTerm, sortBy } = useFilterState();

  const filteredArtworks = useMemo(() => {
    let result = artworks;

    // 카테고리 필터
    result = filterArtworksByCategories(result, categories);

    // 검색 필터
    result = filterArtworksBySearch(result, searchTerm);

    // 정렬
    result = sortArtworks(result, sortBy);

    return result;
  }, [artworks, categories, searchTerm, sortBy]);

  return filteredArtworks;
}
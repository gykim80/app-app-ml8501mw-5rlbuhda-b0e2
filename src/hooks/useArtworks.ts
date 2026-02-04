import { useMemo } from 'react';
import artworksData from '@/data/artworks.json';
import type { Artwork } from '@/types';

/**
 * 작품 데이터를 가져오는 Hook
 */
export function useArtworks() {
  const artworks = useMemo(() => artworksData as Artwork[], []);
  
  return {
    artworks,
    isLoading: false,
    error: null,
  };
}

/**
 * 특정 작품을 ID로 가져오는 Hook
 */
export function useArtwork(id: string | null) {
  const { artworks } = useArtworks();
  
  const artwork = useMemo(() => {
    if (!id) return null;
    return artworks.find((art) => art.id === id) || null;
  }, [artworks, id]);
  
  return artwork;
}
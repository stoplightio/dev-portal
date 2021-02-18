import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const usePrefetchOnHover = (url: string) => {
  const { prefetch } = useRouter();

  const doPrefetch = useCallback(() => {
    prefetch(url);
  }, [prefetch, url]);

  return {
    onMouseEnter: doPrefetch,
    onFocus: doPrefetch,
  };
};

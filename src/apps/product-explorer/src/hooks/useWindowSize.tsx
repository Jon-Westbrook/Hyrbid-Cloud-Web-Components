import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect((): any => {
    const isClient = typeof window === 'object';

    function getSize(): WindowSize {
      return {
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
      };
    }

    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

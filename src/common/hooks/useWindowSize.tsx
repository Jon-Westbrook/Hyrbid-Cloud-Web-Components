import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

type Size = {
  width: number;
  height: number;
};

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const isClient = typeof window === 'object';

    function getSize(): WindowSize {
      return {
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
      };
    }

    if (!isClient) {
      return;
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

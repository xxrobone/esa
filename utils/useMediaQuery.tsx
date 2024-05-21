import { useState, useEffect } from 'react';

interface MediaQuery {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useMediaQuery = (): MediaQuery => {
  const [mediaQuery, setMediaQuery] = useState<MediaQuery>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setMediaQuery({
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1200,
        isDesktop: width > 1200,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return mediaQuery;
};

export default useMediaQuery;

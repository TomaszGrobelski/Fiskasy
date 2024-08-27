import { useEffect } from 'react';

type CloseMenuCallback = VoidFunction;

const useCloseMenuOnResize = (closeMenuCallback: CloseMenuCallback) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        closeMenuCallback();
      }
    };

    window.addEventListener('resize', handleResize);

    // Sprawdź na początku, aby zamknąć menu, jeśli użytkownik zacznie na większej szerokości
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [closeMenuCallback]);
};

export default useCloseMenuOnResize;

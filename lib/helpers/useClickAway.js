import { useEffect } from 'react';

const useClickAway = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (ref && !ref.contains(event.target)) {
        handler(event);
      }
    };
    if (typeof window !== 'undefined' && ref) {
      document.addEventListener('click', listener);
    }
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);

  return ref;
};

export default useClickAway;

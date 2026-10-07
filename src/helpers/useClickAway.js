import { useEffect } from 'react';

const useClickAway = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (ref && !ref.contains(event.target)) {
                handler(event);
            }
        };
        if (typeof document === 'object' && ref) {
            document.addEventListener('click', listener);
        }
        return () => {
            if (typeof document === 'object') {
                document.removeEventListener('click', listener);
            }
        };
    }, [ref, handler]);

    return ref;
};

export default useClickAway;

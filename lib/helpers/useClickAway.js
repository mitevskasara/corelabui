import { useEffect } from 'react';

const useClickAway = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (ref && !ref.contains(event.target)) {
                handler(event);
            }
        };
        if (document && ref) {
            document.addEventListener('click', listener);
        }
        return () => {
            if (document) {
                document.removeEventListener('click', listener);
            }
        };
    }, [ref, handler]);

    return ref;
};

export default useClickAway;

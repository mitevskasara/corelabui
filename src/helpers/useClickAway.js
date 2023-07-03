import { useEffect } from 'react';

const useClickAway = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (ref && !ref.contains(event.target)) {
                handler(event);
            }
        };
        if (window !== undefined && document !== undefined && ref) {
            document?.addEventListener('click', listener);
        }
        return () => {
            if (window !== undefined && document !== undefined) {
                document?.removeEventListener('click', listener);
            }
        };
    }, [ref, handler]);

    return ref;
};

export default useClickAway;

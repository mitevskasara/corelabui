import { useState, useEffect } from 'react';

const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = ({ key }) => {
        if (key === targetKey) setKeyPressed(true);
    };

    const upHandler = ({ key }) => {
        if (key === targetKey) setKeyPressed(false);
    };

    useEffect(() => {
        if (typeof window === 'object') {
            window.addEventListener('keydown', downHandler);
            window.addEventListener('keyup', upHandler);
        }

        return () => {
            if (typeof window === 'object') {
                window.removeEventListener('keydown', downHandler);
                window.removeEventListener('keyup', upHandler);
            }
        };
    }, []);

    return keyPressed;
};

export default useKeyPress;

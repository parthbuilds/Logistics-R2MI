import { useState, useCallback } from "react";

function throttle(func, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        func(...args);
    };
}

export const useTiltEffect = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback(
        throttle((e) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (centerY - y) / 50; // Adjust for intensity
            const rotateY = (x - centerX) / 50;

            setRotate({ x: rotateX, y: rotateY });
        }, 50),
        [setRotate]
    );

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return { rotate, onMouseMove, onMouseLeave };
};

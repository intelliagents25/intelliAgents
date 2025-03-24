import React, { useEffect, useState } from 'react';
import styles from './ChatBox.module.css';

const LoadingAnimation = () => {
    const [dotCount, setDotCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prevCount) => (prevCount % 3) + 1);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <span key="loading" id="loading" className={styles.loading} data-author={"other"}>
            {"●".repeat(dotCount)}
        </span>
    );
};

export default LoadingAnimation;
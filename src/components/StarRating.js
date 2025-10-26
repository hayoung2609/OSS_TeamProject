// src/components/StarRating.js
import React from 'react';

function StarRating({ maxRating = 5, currentRating = 0, onRate, readOnly = false }) {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <span
                key={i}
                className={`cursor-${readOnly ? 'default' : 'pointer'} text-3xl ${i <= currentRating ? 'text-yellow-400' : 'text-gray-300'}`}
                onClick={() => !readOnly && onRate && onRate(i)}
                style={{ userSelect: 'none' }}
            >
                ★
            </span>
        );
    }
    return <div className="flex">{stars}</div>;
}

export default StarRating;
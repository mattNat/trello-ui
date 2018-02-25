import React from 'react';

import './card.css';

// avoid arrow functions for declaring components
export default function Card() {
    const text  = 'Example card';
    return (
        // JSX syntax 
        <div className="card">
            // will access text variable
            // can also put {a + b}
            // {'abc'.toUpperCase()}
            {text}
        </div>
    );
};

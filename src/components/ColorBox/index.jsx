import React, { useState } from 'react';

import './ColorBox.scss';

const getRandomColor = () => {
    const COLOR_LIST = ['deeppink', 'red', 'green', 'blue', 'black'];
    const colorIndex = Math.floor(Math.random() * 5);
    return COLOR_LIST[colorIndex];
}

const ColorBox = () => {

    const [color, setColor] = useState(() => {
        const initialColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initialColor);
        return initialColor;
    });

    const handleBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
};


export default ColorBox;

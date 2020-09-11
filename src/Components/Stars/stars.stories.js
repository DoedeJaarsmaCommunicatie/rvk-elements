import React from 'react';
import Stars from './index';
import { withKnobs, number, color, boolean } from '@storybook/addon-knobs';

export default { title: 'Stars component', decorators: [withKnobs]};

export const basic = () => {
    const score = number('Score', 10, { step: 0.1 });
    const showScore = boolean('Show score', true);
    const colour = color('Color', '#333');

    return <Stars score={score} color={colour} showScore={showScore} />
}

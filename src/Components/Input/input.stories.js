import React from 'react';
import { Stars } from './index';
import {withKnobs, color, boolean} from '@storybook/addon-knobs';

export default { title: 'Star input components', decorators: [ withKnobs ]};

export const basic = () => {
  const showScore = boolean('Show score', true);
  const pickedColor = color('Color', '#f93');

  return <Stars input={{ id: 'score' }} color={pickedColor} showScore={showScore} />
}

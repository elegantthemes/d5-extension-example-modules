import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './table.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/table'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M997.36 815.956c-2.674 31.312-27.966 57.64-59.764 57.64h-851.192c-31.798 0-57.090-26.326-59.766-57.64h-1.034v-793.552c0-33.562 27.238-60.798 60.798-60.798h851.192c33.562 0 60.798 27.238 60.798 60.798v793.552h-1.034zM390.402 508.798v182.396h243.194v-182.396h-243.194zM633.598 448v-187.444h-243.194v187.444h243.194zM329.604 691.194v-182.396h-243.194v182.396h243.194zM86.404 448h243.194v-187.444h-243.194v187.444zM86.404 22.404v182.396h243.194v-182.396h-243.194zM390.402 22.404v182.396h243.194v-182.396h-243.194zM937.596 22.404h-243.194v182.396h243.194v-182.396zM937.596 260.554h-243.194v187.446h243.194v-187.444zM937.596 508.798h-243.194v182.396h243.194v-182.396z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
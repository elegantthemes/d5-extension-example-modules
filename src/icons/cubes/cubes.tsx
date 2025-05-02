import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './cubes.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/cubes'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M744.96 524.715l0.256 276.736-238.848 60.928-238.336-72.448v-262.4l-246.784-96.256v-276.992l261.376-126.976 225.28 107.264 253.952-109.312 232.704 120.832v285.184l-249.6 93.44zM48.384 425.387l219.648 77.312 215.040-80.128-209.408-91.392-225.28 94.208zM501.504 146.091l-218.88-94.976v264.448l215.808 95.488 3.328-1.28v-263.68zM294.912 780.459l211.2 68.096 216.576-54.528-212.224-83.2-215.552 69.632zM519.68 695.467l209.408 82.688v-252.16l-2.048-0.256 1.024-0.256-77.312-35.072-131.072-55.296v260.352zM532.48 420.779v0l4.864 2.048 200.448 87.296 237.568-86.528-220.672-98.304-222.208 95.488zM979.968 155.819l-210.688-104.704v257.024l210.688 100.608v-252.928z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
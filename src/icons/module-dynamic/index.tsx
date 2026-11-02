import React, { ReactElement } from 'react';

// Icon data.
export const name      = 'example/module-dynamic'; // Unique name.
export const viewBox   = '0 0 16 16'; // Module picker and Layers panel render icons with viewBox `0 0 16 16`.
// Source art is drawn on a `0 96 960 960` canvas, so scale it down to 16×16.
export const component = (): ReactElement => (
  <g transform="scale(0.016667) translate(0, -96)">
    <path d="m552 240-36 312h192L415 912h-21l48-264H282l248-408h22Z"/>
  </g>
); // Your SVG path. without the svg tag.

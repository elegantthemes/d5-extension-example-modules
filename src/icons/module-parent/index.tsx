import React, { ReactElement } from 'react';

// Icon data.
export const name      = 'example/module-parent'; // Unique name.
export const viewBox   = '0 0 16 16'; // Module picker and Layers panel render icons with viewBox `0 0 16 16`.
// Source art is drawn on a `0 96 960 960` canvas, so scale it down to 16×16.
export const component = (): ReactElement => (
  <g transform="scale(0.016667) translate(0, -96)">
    <path d="M238 879 62 704l91-90 84 85 170-171 91 91-260 260Zm0-312L62 392l91-90 85 85 169-171 91 91-260 260Zm291 229V668h369v128H529Zm0-312V356h369v128H529Z"/>
  </g>
); // Your SVG path. without the svg tag.

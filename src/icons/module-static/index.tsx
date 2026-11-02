import React, { ReactElement } from 'react';

// Icon data.
export const name      = 'example/module-static'; // Unique name.
export const viewBox   = '0 0 16 16'; // Module picker and Layers panel render icons with viewBox `0 0 16 16`.
// Source art is drawn on a `0 96 960 960` canvas, so scale it down to 16×16.
export const component = (): ReactElement => (
  <g transform="scale(0.016667) translate(0, -96)">
    <path d="M114 838V710h491v128H114Zm0-198V512h733v128H114Zm0-198V314h733v128H114Z"/>
  </g>
); // Your SVG path. without the svg tag.

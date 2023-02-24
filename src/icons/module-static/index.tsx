import React, { ReactElement } from 'react';

// Icon data.
export const name      = 'example/module-static'; // Unique name.
export const viewBox   = '0 96 960 960'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M114 838V710h491v128H114Zm0-198V512h733v128H114Zm0-198V314h733v128H114Z"/>
); // Your SVG path. without the svg tag.

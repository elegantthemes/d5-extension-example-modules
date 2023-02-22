import React, { ReactElement } from 'react';

// Icon data.
export const name      = 'example/module-parent'; // Unique name.
export const viewBox   = '0 96 960 960';  // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M238 879 62 704l91-90 84 85 170-171 91 91-260 260Zm0-312L62 392l91-90 85 85 169-171 91 91-260 260Zm291 229V668h369v128H529Zm0-312V356h369v128H529Z"/>
); // Your SVG path. without the svg tag.

import React, { ReactElement } from 'react';

// Icon data.
export const name      = 'example/module-dynamic'; // Unique name.
export const viewBox   = '0 96 960 960'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="m552 240-36 312h192L415 912h-21l48-264H282l248-408h22Z"/>
); // Your SVG path. without the svg tag.

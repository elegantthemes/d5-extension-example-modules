import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './email.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/email'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M977.878 688.962c-2.732 42.056-36.042 75.368-78.1 78.146-1.822 0.088-3.6 0.548-5.422 0.548v-0.548l-766.208 0.548c-1.822 0-3.6-0.46-5.422-0.548-42.602-2.82-76.236-36.862-78.288-79.608-0.044-1.274-0.406-2.644-0.406-3.962s0.362-2.602 0.406-3.876v-544.892h933.4v543.388c0.132 1.822 0.592 3.556 0.592 5.378 0 1.866-0.408 3.6-0.548 5.422zM824.952 684.086l-313.82-267.208-313.728 267.208h627.548zM127.508 599.51c0.228 0 0.46-0.044 0.68-0.044v34.494l206.008-175.39-206.688-194.574v335.514zM169.746 217.794l207.83 206.832 133.602-116.788 134.422 117.566 206.74-207.654h-682.596zM894.9 264.042l-206.74 194.572 206.15 175.522v-34.634c0.23 0 0.408 0.044 0.592 0.044v-335.514z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
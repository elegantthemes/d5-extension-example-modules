import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './word.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/word'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128.128 729.286c-56.258-79.422-89.35-175.39-89.35-281.286s33.092-201.864 89.35-281.286v562.57zM694.008 815.326l205.172-201.864v-443.438c56.258 79.422 89.35 175.39 89.35 281.286 0 264.738-211.792 483.148-473.22 483.148-115.824 0-225.028-43.020-307.758-115.824-3.31-3.31 486.458-3.31 486.458-3.31zM842.924 563.824h-198.554l-3.31 198.554h-459.984v-658.538c86.040-86.040 201.864-138.988 330.924-138.988s244.884 52.948 330.924 138.988v459.984zM753.574 454.618l-158.844-320.996h-76.112v215.1l-119.132-211.792h-115.824v320.996h-36.402v52.948h152.224v-52.948h-36.402v-195.244l145.606 248.192h86.040v-221.718l82.73 168.772h-29.784v52.948h138.988v-52.948h-33.092z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
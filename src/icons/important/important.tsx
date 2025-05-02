import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './important.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/important'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M724.77 902.672c-11.062 11.154-25.996 17.33-41.76 17.33h-342.016c-15.67 0-30.7-6.174-41.67-17.33l-241.99-241.902c-11.156-11.062-17.33-25.996-17.33-41.76v-342.112c0-15.67 6.174-30.7 17.33-41.67l241.902-241.99c11.062-11.062 26.090-17.24 41.76-17.24h342.112c15.67 0 30.7 6.174 41.67 17.33l241.9 241.99c11.062 11.062 17.33 25.996 17.33 41.67v342.016c0 15.67-6.174 30.7-17.33 41.67l-241.902 241.99zM512 330c-32.54 0-59 26.462-59 59v354c0 32.54 26.462 59 59 59s59-26.462 59-59v-354c0-32.54-26.462-59-59-59zM571 153c0-32.54-26.462-59-59-59s-59 26.462-59 59 26.462 59 59 59 59-26.462 59-59z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
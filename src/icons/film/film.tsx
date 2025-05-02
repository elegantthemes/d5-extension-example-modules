import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './film.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/film'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M917.994 911.988h-811.982c-32.016 0-58-25.984-58-58v-811.982c0-32.016 25.984-58 58-58h811.982c32.016 0 58 25.984 58 58v811.982c0 32.016-25.984 58-58 58zM222.006 390v-116h-116v116h116zM106.006 506v116h116v-116h-116zM280.006 332h463.988v-289.994h-463.988v289.994zM743.994 390h-463.988v463.988h463.988v-463.988zM801.994 390h116v-116h-116v116zM801.994 506v116h116v-116h-116zM801.994 737.994v116h116v-116h-116zM222.006 737.994h-116v116h116v-116zM106.006 158.006h116v-116h-116v116zM801.994 158.006h116v-116h-116v116z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
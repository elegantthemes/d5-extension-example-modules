import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './audio.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/audio'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M978.688 960c-5.888 0-12.16-0.96-18.688-2.944l-640-108.864c-35.328-10.752-64-48.192-64-83.52v-64c0-1.92 0-5.312 0-7.872 0-44.736 0-180.8 0-180.8v-256h-96c-88.384 0-160-71.616-160-160s71.616-160 160-160 160 71.616 160 160v426.688l640 106.688v-245.376h-96c-88.384 0-160-71.616-160-160s71.616-160 160-160 160 71.616 160 160v416c0 0 0 136.192 0 191.616 0 7.040 0 12.992 0 16.96v64c0 28.864-19.072 47.424-45.312 47.424zM256 96c0-52.928-43.072-96-96-96s-96 43.072-96 96 43.072 96 96 96h96v-96zM960 224c0-52.928-43.072-96-96-96s-96 43.072-96 96 43.072 96 96 96h96v-96zM320 587.52v177.152c0 5.568 7.744 17.216 16.32 21.376l623.68 106.112v-197.952l-640-106.688z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
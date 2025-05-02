import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './portfolio.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/portfolio'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 832h-896c-35.328 0-64-30.592-64-65.856v-702.272c0-35.264 28.672-63.872 64-63.872h896c35.328 0 64 28.608 64 63.872v702.272c0 35.264-28.672 65.856-64 65.856zM384 576v192h256v-192h-256zM640 512v-197.312h-256v197.312h256zM64 768h256v-192h-256v192zM64 512h256v-197.312h-256v197.312zM960 64l-896-0.128v192.128h256v-192h64v192h256v-192h64v192h256v-192zM960 314.688h-256v197.312h256v-197.312zM960 766.144v-190.144h-256v192h256v-1.856z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
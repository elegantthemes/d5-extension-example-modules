import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './fire.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/fire'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M787.4 38.73c107.1 306-84.15 508.72-84.15 508.72-22.95-153-68.85-221.85-68.85-221.85-107.1 57.37-114.75 283.050-114.75 283.050-126.22-179.77-7.65-447.52-7.65-447.52-53.55 0-164.47 76.5-164.47 76.5-11.47-172.12 126.22-260.1 210.37-279.22-38.25-7.65-68.85-7.65-122.4 7.65-22.95 7.65-451.35 156.82-206.55 608.17 0 0 45.9-149.17 122.4-202.72 0 0-76.5 153 42.070 328.95 122.4 175.95 130.050 229.5 130.050 229.5s76.5-99.45 87.97-298.35c0 0 53.55 68.85 76.5 164.47 7.65 11.47 363.37-397.8 99.45-757.35z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
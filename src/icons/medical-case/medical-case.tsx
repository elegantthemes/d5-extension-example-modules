import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './medical-case.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/medical-case'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M950.4 673.066c-22.4 22.4-51.2 35.2-83.2 35.2h-150.4v83.2c0 12.8-6.4 25.6-16 35.2s-19.2 16-35.2 16h-300.8c-12.8 0-25.6-6.4-35.2-16s-12.8-22.4-12.8-35.2v-83.2h-150.4c-32 0-60.8-12.8-83.2-35.2s-35.2-51.2-35.2-83.2v-435.2c0-32 12.8-60.8 35.2-83.2s51.2-35.2 83.2-35.2h700.8c32 0 60.8 12.8 83.2 35.2s35.2 51.2 35.2 83.2v435.2c-3.2 32-12.8 60.8-35.2 83.2zM380.8 778.666h268.8v-70.4h-268.8v70.4zM716.8 324.266c0-6.4 0-9.6-3.2-12.8s-6.4-3.2-12.8-3.2h-118.4v-118.4c0-6.4 0-9.6-3.2-12.8s-6.4-3.2-12.8-3.2h-99.2c-6.4 0-9.6 0-12.8 3.2s-3.2 6.4-3.2 12.8v118.4h-118.4c-6.4 0-9.6 0-12.8 3.2s-3.2 6.4-3.2 12.8v99.2c0 6.4 0 9.6 3.2 12.8s6.4 3.2 12.8 3.2h115.2v118.4c0 6.4 0 9.6 3.2 12.8s6.4 3.2 12.8 3.2h99.2c6.4 0 9.6 0 12.8-3.2s3.2-6.4 3.2-12.8v-118.4h118.4c6.4 0 9.6 0 12.8-3.2s3.2-6.4 3.2-12.8l3.2-99.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 
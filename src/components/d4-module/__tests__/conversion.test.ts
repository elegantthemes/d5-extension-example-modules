import { readFileSync } from 'fs';
import { resolve } from 'path';

import moduleMetadata from '../module.json';
import { conversionOutline } from '../conversion-outline';

interface D4ModuleMetadata {
  name: string;
  d4Shortcode: string;
  attributes: {
    title?: {
      elementType?: string;
    };
  };
}

interface ConversionOutlineJson {
  module: {
    content: string;
    title: string;
    header_level: string;
  };
  css: Record<string, string>;
  advanced: {
    fonts: {
      header: string;
    };
  };
}

describe( 'D4 Module conversion unit tests', () => {
  it( 'parses module.json with D4 shortcode and heading preview contract', () => {
    const d4ModuleMetadata = moduleMetadata as D4ModuleMetadata;

    expect( d4ModuleMetadata.name ).toBe( 'example/d4-module' );
    expect( d4ModuleMetadata.d4Shortcode ).toBe( 'd4_module' );
    expect( d4ModuleMetadata.attributes.title?.elementType ).toBe( 'heading' );
  } );

  it( 'matches conversion outline JSON with TypeScript conversion attrs', () => {
    const conversionOutlineJsonPath = resolve( __dirname, '../conversion-outline.json' );
    const conversionOutlineJsonContents = readFileSync( conversionOutlineJsonPath, 'utf8' );
    const conversionOutlineJson = JSON.parse( conversionOutlineJsonContents ) as ConversionOutlineJson;

    expect( conversionOutline.module.content ).toBe( conversionOutlineJson.module.content );
    expect( conversionOutline.module.title ).toBe( conversionOutlineJson.module.title );
    expect( conversionOutline.module.header_level ).toBe( conversionOutlineJson.module.header_level );
    expect( conversionOutline.advanced.fonts.header ).toBe( conversionOutlineJson.advanced.fonts.header );
    expect( conversionOutline.css.title ).toBe( conversionOutlineJson.css.title );
    expect( conversionOutline.css.content ).toBe( conversionOutlineJson.css.content );
  } );

  it( 'maps D4 header level to D5 title decoration attrs', () => {
    expect( conversionOutline.module.header_level ).toBe( 'title.decoration.font.font.*.headingLevel' );
    expect( conversionOutline.module.title ).toBe( 'title.innerContent.*' );
    expect( conversionOutline.module.content ).toBe( 'content.innerContent.*' );
  } );
} );

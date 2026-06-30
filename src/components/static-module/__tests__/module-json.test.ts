import { readFileSync } from 'fs';
import { resolve } from 'path';

interface StaticModuleMetadata {
  name: string;
  title: string;
  moduleClassName: string;
}

describe( 'Static Module module.json smoke test', () => {
  it( 'parses with expected module metadata', () => {
    const moduleJsonPath = resolve( __dirname, '../module.json' );
    const moduleJsonContents = readFileSync( moduleJsonPath, 'utf8' );
    const staticModuleMetadata = JSON.parse( moduleJsonContents ) as StaticModuleMetadata;

    expect( staticModuleMetadata.name ).toBe( 'example/static-module' );
    expect( staticModuleMetadata.title ).toBe( 'Static Module' );
    expect( staticModuleMetadata.moduleClassName ).toBe( 'example_static_module' );
  } );
} );

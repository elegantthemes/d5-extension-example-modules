import defaultRenderAttributes from '../module-default-render-attributes.json';
import moduleMetadata from '../module.json';
import { StaticModuleAttrs } from '../types';

interface StaticModuleMetadata {
  name: string;
  title: string;
  moduleClassName: string;
  attributes: Record<string, { type?: string }>;
}

describe( 'Static Module metadata unit tests', () => {
  it( 'parses module.json with expected module metadata', () => {
    const staticModuleMetadata = moduleMetadata as StaticModuleMetadata;

    expect( staticModuleMetadata.name ).toBe( 'example/static-module' );
    expect( staticModuleMetadata.title ).toBe( 'Static Module' );
    expect( staticModuleMetadata.moduleClassName ).toBe( 'example_static_module' );
    expect( staticModuleMetadata.attributes ).toHaveProperty( 'summary' );
    expect( staticModuleMetadata.attributes ).toHaveProperty( 'title' );
  } );

  it( 'parses default render attributes with summary content', () => {
    const staticModuleDefaultAttrs = defaultRenderAttributes as StaticModuleAttrs;

    expect( staticModuleDefaultAttrs.summary?.innerContent?.desktop?.value ).toContain( 'brief summary' );
    expect( staticModuleDefaultAttrs.badge?.innerContent?.desktop?.value ).toBe( 'New' );
    expect( staticModuleDefaultAttrs.module?.meta?.adminLabel?.desktop?.value ).toBe( 'Static Module' );
  } );
} );

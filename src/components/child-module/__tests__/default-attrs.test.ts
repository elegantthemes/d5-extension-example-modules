import moduleMetadata from '../module.json';
import parentModuleMetadata from '../../parent-module/module.json';

interface ChildModuleFieldSettings {
  innerContent?: {
    item?: {
      attrName?: string;
      label?: string;
    };
  };
}

interface ChildModuleMetadata {
  name: string;
  title: string;
  category: string;
  moduleClassName: string;
  attributes: {
    title?: {
      settings?: ChildModuleFieldSettings;
    };
    content?: {
      settings?: ChildModuleFieldSettings;
    };
  };
}

describe( 'Child Module default attrs unit tests', () => {
  it( 'parses module.json with expected child module metadata', () => {
    const childModuleMetadata = moduleMetadata as ChildModuleMetadata;

    expect( childModuleMetadata.name ).toBe( 'example/child-module' );
    expect( childModuleMetadata.title ).toBe( 'Child Module' );
    expect( childModuleMetadata.category ).toBe( 'child-module' );
    expect( childModuleMetadata.moduleClassName ).toBe( 'example_child_module' );
  } );

  it( 'defines default field bindings for title and content attrs', () => {
    const childModuleMetadata = moduleMetadata as ChildModuleMetadata;

    expect( childModuleMetadata.attributes.title?.settings?.innerContent?.item?.attrName ).toBe( 'title.innerContent' );
    expect( childModuleMetadata.attributes.title?.settings?.innerContent?.item?.label ).toBe( 'Title' );
    expect( childModuleMetadata.attributes.content?.settings?.innerContent?.item?.attrName ).toBe( 'content.innerContent' );
    expect( childModuleMetadata.attributes.content?.settings?.innerContent?.item?.label ).toBe( 'Content' );
  } );

  it( 'links child module metadata to the parent module namespace', () => {
    const parentMetadata = parentModuleMetadata as {
      childModuleName: string;
      childrenName: string[];
    };

    expect( parentMetadata.childModuleName ).toBe( 'example/child-module' );
    expect( parentMetadata.childrenName ).toContain( 'example/child-module' );
  } );
} );

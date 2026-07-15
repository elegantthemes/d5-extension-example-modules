import moduleMetadata from '../module.json';

interface ParentModuleMetadata {
  name: string;
  title: string;
  moduleClassName: string;
  childModuleName: string;
  childModuleTitle: string;
  childrenName: string[];
}

describe( 'Parent Module metadata unit tests', () => {
  it( 'parses module.json with expected parent module metadata', () => {
    const parentModuleMetadata = moduleMetadata as ParentModuleMetadata;

    expect( parentModuleMetadata.name ).toBe( 'example/parent-module' );
    expect( parentModuleMetadata.title ).toBe( 'Parent Module' );
    expect( parentModuleMetadata.moduleClassName ).toBe( 'example_parent_module' );
  } );

  it( 'defines child link metadata for the child module namespace', () => {
    const parentModuleMetadata = moduleMetadata as ParentModuleMetadata;

    expect( parentModuleMetadata.childModuleName ).toBe( 'example/child-module' );
    expect( parentModuleMetadata.childModuleTitle ).toBe( 'Child Module' );
    expect( parentModuleMetadata.childrenName ).toEqual( [ 'example/child-module' ] );
  } );
} );

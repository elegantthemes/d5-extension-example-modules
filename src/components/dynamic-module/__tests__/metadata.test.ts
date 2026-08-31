import moduleMetadata from '../module.json';

interface DynamicModuleMetadataAttributeSettings {
  innerContent?: {
    groupType?: string;
    item?: {
      attrName?: string;
      subName?: string;
      label?: string;
    };
    items?: Record<string, {
      subName?: string;
      label?: string;
    }>;
  };
  decoration?: Record<string, unknown>;
}

interface DynamicModuleMetadata {
  name: string;
  title: string;
  moduleClassName: string;
  attributes: Record<string, {
    type?: string;
    settings?: DynamicModuleMetadataAttributeSettings;
  }>;
}

describe( 'Dynamic Module metadata unit tests', () => {
  it( 'parses module.json with expected module metadata', () => {
    const dynamicModuleMetadata = moduleMetadata as DynamicModuleMetadata;

    expect( dynamicModuleMetadata.name ).toBe( 'example/dynamic-module' );
    expect( dynamicModuleMetadata.title ).toBe( 'Dynamic Module' );
    expect( dynamicModuleMetadata.moduleClassName ).toBe( 'example_dynamic_module' );
    expect( dynamicModuleMetadata.attributes ).toHaveProperty( 'title' );
    expect( dynamicModuleMetadata.attributes ).toHaveProperty( 'postItems' );
    expect( dynamicModuleMetadata.attributes ).toHaveProperty( 'postTitle' );
  } );

  it( 'defines dynamic field bindings for title and post items', () => {
    const dynamicModuleMetadata = moduleMetadata as DynamicModuleMetadata;
    const titleSettings = dynamicModuleMetadata.attributes.title?.settings;
    const postItemsSettings = dynamicModuleMetadata.attributes.postItems?.settings;

    expect( titleSettings?.innerContent?.item?.attrName ).toBe( 'title.innerContent' );
    expect( titleSettings?.innerContent?.item?.label ).toBe( 'Title' );

    expect( postItemsSettings?.innerContent?.items?.src?.subName ).toBe( 'postsNumber' );
    expect( postItemsSettings?.innerContent?.items?.src?.label ).toBe( 'Number of posts' );
  } );

  it( 'defines post title decoration binding for heading level', () => {
    const dynamicModuleMetadata = moduleMetadata as DynamicModuleMetadata;
    const postTitleDecoration = dynamicModuleMetadata.attributes.postTitle?.settings?.decoration;

    expect( postTitleDecoration ).toHaveProperty( 'font' );
  } );
} );

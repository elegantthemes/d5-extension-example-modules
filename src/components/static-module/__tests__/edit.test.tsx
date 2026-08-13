import React, { createElement, ReactElement } from 'react';
import { render } from '@testing-library/react';

import { StaticModuleEdit } from '../edit';
import { StaticModuleEditProps } from '../types';
import { staticModuleDefaultAttrs } from './__mock-data__/attrs';
import testCases from './test-cases.json';

interface StaticModuleEditTestCase {
  title: string;
  args: {
    attrs: StaticModuleEditProps['attrs'];
    id: string;
    name: string;
    childrenIds: string[];
  };
}

const createMockElements = () => ( {
  render: ( { attrName }: { attrName: string } ): ReactElement => createElement(
    'span',
    {
      className: `example_static_module__${ attrName }`,
      'data-et-element': attrName,
    },
    `Static ${ attrName }`,
  ),
  styleComponents: () => null,
  style: () => null,
  scriptData: () => null,
} );

describe.each( testCases as StaticModuleEditTestCase[] )( '<StaticModuleEdit />', ( { title, args } ) => {
  it( `matches snapshot when "${ title }"`, () => {
    const mockElements = createMockElements();
    const editComponentProps: StaticModuleEditProps = {
      attrs: {
        ...staticModuleDefaultAttrs,
        ...args.attrs,
      },
      elements: mockElements as StaticModuleEditProps['elements'],
      id: args.id,
      name: args.name,
    };

    const { container } = render( createElement( StaticModuleEdit, editComponentProps ) );

    expect( container.innerHTML ).toContain( 'example_static_module__inner' );
    expect( container.innerHTML ).toContain( 'Static summary' );
    expect( container.innerHTML ).toMatchSnapshot();
  } );
} );

// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
    ModuleContainer,
  } from '@divi/module';

// Local Dependencies.
import { EditProps } from './types';
import { moduleClassnames } from './module-classnames';

const Edit = (props : EditProps) => {
    const {
        attrs,
        id,
        name,
        elements,
      } = props;

      // Module Attributes.
      let panelLayout = attrs?.module?.advanced?.layout?.desktop?.value?.style.toString();
   
      // Title Attributes.
      let headingAlignment = attrs?.title?.decoration?.font?.font?.desktop?.value?.textAlign.toString();
      let headingColor = attrs?.title?.decoration?.font?.font?.desktop?.value?.color?.toString();
      
      // Read More Button Options.
      let readMoreText = attrs?.title?.readMore?.link?.desktop?.value?.text?.toString();
      let readMoreLink = attrs?.title?.readMore?.link?.desktop?.value?.url?.toString();
      let readMoreTarget = attrs?.title?.readMore?.link?.desktop?.value?.target?.toString();
      
      // Panel Icon.
      let showIcon = attrs?.title?.readMore?.icon?.desktop?.value?.show.toString();
      let icon = attrs?.title?.readMore?.icon;

      // Use defaultValues if not defined
      /**
       * @todo figure out Icon Processing
       */
     //console.log( 'icon', icon );

      // Convert to Bootstrap alignment values.
      if( ! headingAlignment || 'left' === headingAlignment ) {
        headingAlignment = 'start';
      } else if( 'right' === headingAlignment ) {
        headingAlignment = 'end';
      }

      // Panel layout default value.
      if( !panelLayout ) {
        panelLayout = 'default';
      }
      
      // Readmore Target default value.
      if( !readMoreTarget ) {
        readMoreTarget = 'on';
      }

    return (
        <ModuleContainer
          attrs={attrs}
          elements={elements}
          id={id}
          name={name}
          //scriptDataComponent={ModuleScriptData}
          //stylesComponent={ModuleStyles}
          classnamesFunction={moduleClassnames}
        >
          {
          elements.styleComponents({
            attrName: 'module',
          })
          }
          <div
            className={ `card-header border-bottom-0 justify-content-${headingAlignment}`}>
            {
              showIcon ?
              <span className='ca-gov-icon-home me-2' style={ {verticalAlign: 'sub'} }></span> :
              ''
            }
            {
              elements.render({
                attrName: 'title',
                htmlAttributes: {
                  style: {
                    color: headingColor,
                  }
                }
              })
            }
            {
              readMoreLink ? 
              <div className={ 'options' + ('end' === headingAlignment ? ' ps-3 ms-0': '') }>
                <a href={readMoreLink} className={ `btn btn-${panelLayout}` } target={ 'on' === readMoreTarget ? '_blank' : '_self' }>
                  {readMoreText}
                </a>
              </div>
              : 
              ''
            }
          </div>
            {
            elements.render({
              attrName: 'content',
            })
            }
        </ModuleContainer>
      )
}

export {
    Edit,
  };
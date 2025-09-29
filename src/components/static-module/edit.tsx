// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';
import { select } from '@divi/data';

// Local Dependencies.
import { StaticModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';

import staticMetadata from './module.json';

/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {StaticModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
export const StaticModuleEdit = (props: StaticModuleEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
  } = props;

  // Get image attributes.
  const imageSrc = attrs?.image?.innerContent?.desktop?.value?.src ?? ''
  const imageAlt = attrs?.image?.innerContent?.desktop?.value?.alt ?? '';

  // ✅ FIXED: Use string notation (not array) for getSetting.
  const postId       = select('divi/settings').getSetting('post.id');
  const postTitle    = select('divi/settings').getSetting('post.title');
  const postType     = select('divi/settings').getSetting('post.type');
  const postStatus   = select('divi/settings').getSetting('post.status');
  const postMeta     = select('divi/settings').getSetting('post.meta');
  const ajaxUrl      = select('divi/settings').getSetting('urls.adminAjax');
  const siteUrl      = select('divi/settings').getSetting('urls.site');
  const currentUser  = select('divi/settings').getSetting('user.current');

  // Test comprehensive data paths based on D4 ETBuilderBackendDynamic structure.
  const ajaxUrlAlt     = select('divi/settings').getSetting(['ajaxUrl']);
  const siteUrlAlt     = select('divi/settings').getSetting(['siteUrl']);
  const allSettings    = select('divi/settings').getSetting([]);
  
  // ✅ FIXED: Test D4 equivalent paths with correct string notation.
  const postMeta2      = select('divi/settings').getSetting('postMeta');
  const currentUserId  = select('divi/settings').getSetting('user.id');
  const userName       = select('divi/settings').getSetting('user.name');
  const userRole       = select('divi/settings').getSetting('user.role');
  const locale         = select('divi/settings').getSetting('locale');
  const debug          = select('divi/settings').getSetting('debug');
  const isCustomPost   = select('divi/settings').getSetting('isCustomPostType');
  const layoutType     = select('divi/settings').getSetting('layout.type');
  const requestType    = select('divi/settings').getSetting('requestType');

  // 📸 SCREENSHOT-READY: Simple console logs for documentation.
  console.log('📋 D4 → D5 Migration Results:');
  console.log('✅ postId:', postId);
  console.log('✅ postTitle:', postTitle);
  console.log('✅ postType:', postType);
  console.log('✅ postStatus:', postStatus);
  console.log('❌ ajaxUrl:', ajaxUrl || 'EMPTY');
  console.log('❌ siteUrl:', siteUrl || 'EMPTY');
  console.log('❌ currentUser:', currentUser || 'EMPTY');
  console.log('❌ locale:', locale || 'EMPTY');

  // When summary is reset, placeholder is displayed since reset restores default value.
  // When summary is empty, placeholder is hidden since empty string indicates intentional user action.
  // To modify this behavior, developers can update the summary attribute with a default value during module render.
  // if ('' === attrs?.summary?.innerContent?.desktop?.value) {
  //   elements.attrs = {
  //     ...elements.attrs,
  //     summary: {
  //       ...elements.attrs.summary,
  //       innerContent: {
  //         desktop: {
  //           value: staticMetadata?.attributes?.summary?.default?.innerContent?.desktop?.value ?? '',
  //         },
  //       },
  //     },
  //   };
  // }

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      <div className="example_static_module__inner">
        <div className="example_static_module__image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="example_static_module__content-container">
          {elements.render({
            attrName: 'title',
          })}
          {elements.render({
            attrName: 'summary',
          })}
          <div className="example_static_module__content">
            {elements.render({
              attrName: 'content',
            })}
          </div>
        </div>
      </div>
    </ModuleContainer>
  );
};

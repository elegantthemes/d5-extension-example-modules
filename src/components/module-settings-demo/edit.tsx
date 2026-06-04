// External Dependencies.
import React, { ReactElement } from 'react';
import classnames from 'classnames';

// Divi Dependencies.
import {
  ModuleContainer,
} from '@divi/module';

// Local Dependencies.
import { ModuleSettingsDemoEditProps } from './types';
import { ModuleStyles } from './module-styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';
import { getCheckboxLabels, getSelectLabel } from './utils';


/**
 * Module Settings Demo edit component of visual builder.
 *
 * @since ??
 *
 * @param {ModuleSettingsDemoEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleSettingsDemoEdit = (props: ModuleSettingsDemoEditProps): ReactElement => {
  const {
    attrs,
    id,
    name,
    elements,
    isLooped,
    loopIndex,
  } = props;

  const selectKey     = attrs?.selectField?.innerContent?.desktop?.value ?? '';
  const checkboxKeys  = attrs?.checkboxesField?.innerContent?.desktop?.value ?? [];
  const selectLabel   = getSelectLabel(selectKey);
  const checkboxLabel = getCheckboxLabels(checkboxKeys);

  const layoutDisplayValue = attrs?.module?.decoration?.layout?.desktop?.value?.display ?? 'flex';
  const innerClasses       = classnames('example_module_settings_demo__inner', {
    et_flex_module: 'flex' === layoutDisplayValue,
    et_grid_module: 'grid' === layoutDisplayValue,
  });

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
      isLooped={isLooped}
      loopIndex={loopIndex}
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      <div className={innerClasses}>
        <div className="example_module_settings_demo__row">
          {elements.render({
            attrName: 'textInput',
          })}
        </div>
        <div className="example_module_settings_demo__row">
          {elements.render({
            attrName: 'richText',
          })}
        </div>
        <div className="example_module_settings_demo__row example_module_settings_demo__select">
          {selectLabel}
        </div>
        <div className="example_module_settings_demo__row example_module_settings_demo__checkboxes">
          {checkboxLabel}
        </div>
      </div>
    </ModuleContainer>
  );
};

export {
  ModuleSettingsDemoEdit,
};

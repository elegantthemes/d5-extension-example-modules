// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  BackgroundStyle,
  SizingStyle,
  SpacingStyle,
  BorderStyle,
  BoxShadowStyle,
  FiltersStyle,
  TransformStyle,
  AnimationStyle,
  CssStyle,
  DisabledOnStyle,
  OverflowStyle,
  PositionStyle,
  ZIndexStyle,
  TextStyle,
  FontStyle,
  FontBodyStyle,
  CommonStyle,
} from '@divi/module';

// Local dependencies.
import { ChildModuleAttrs } from './types';
import { cssFields } from './custom-css';

/**
 * Blurb Module's style components.
 *
 * @since ??
 */
 const ModuleStyles = ({
  attrs,
  componentType,
  orderClass,
  mode,
  state,
  noStyleTag,
}: StylesProps<ChildModuleAttrs>): ReactElement => {
  const iconClass = `${orderClass} .et_pb_child_module_icon.et-pb-icon`;
  const titleClass = `${orderClass} .et_pb_child_module_title`;
  const contentContainerClass = `${orderClass} .et_pb_child_module_content_container`;
  const contentClass = `${orderClass} .et_pb_child_module_content`;

  const selectors = {
    value: orderClass,
  };

  const iconSelectors = {
    value: iconClass,
  };

  const titleSelectors = {
    value: titleClass,
  };

  const contentSelectors = {
    value: contentClass,
  };

  const contentContainerSelectors = {
    value: contentContainerClass,
  };

  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      <BackgroundStyle
        selectors={selectors}
        attr={attrs?.background}
      />
      <CommonStyle
        selectors={iconSelectors}
        attr={attrs?.iconColor}
        property="color"
      />
      <CommonStyle
        selectors={iconSelectors}
        attr={attrs?.iconSize}
        property="font-size"
      />
      <TextStyle
        selectors={contentContainerSelectors}
        attr={attrs?.text}
      />
      <FontStyle
        selectors={titleSelectors}
        attr={attrs?.titleFont}
      />
      <FontBodyStyle
        selectors={contentSelectors}
        attr={attrs?.bodyFont}
      />
      <SizingStyle
        selectors={selectors}
        attr={attrs?.sizing}
      />
      <SpacingStyle
        selectors={selectors}
        attr={attrs?.spacing}
      />
      <BorderStyle
        selectors={selectors}
        attr={attrs?.border}

        // Once module highlight no longer use border, drop this important.
        important
      />
      <BoxShadowStyle
        selectors={selectors}
        attr={attrs?.boxShadow}
      />
      <FiltersStyle
        selectors={selectors}
        attr={attrs?.filter}
      />
      <TransformStyle
        selectors={selectors}
        attr={attrs?.transform}
      />
      <AnimationStyle
        selectors={selectors}
        attr={attrs?.animation}
        componentType={componentType}
      />
      <CssStyle
        selectors={selectors}
        attr={attrs?.css}
        cssFields={cssFields}
      />
      <DisabledOnStyle
        selectors={selectors}
        attr={attrs?.disabledOn}
      />
      <OverflowStyle
        selectors={selectors}
        attr={attrs?.overflow}
      />
      <PositionStyle
        selectors={selectors}
        attr={attrs?.position}
      />
      <ZIndexStyle
        selectors={selectors}
        attr={attrs?.zIndex}
      />
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};

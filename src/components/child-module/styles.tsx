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
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
}: StylesProps<ChildModuleAttrs>): ReactElement => {
   const iconClass             = `${orderClass} .child-module__icon.et-pb-icon`;
   const titleClass            = `${orderClass} .child-module__title`;
   const contentContainerClass = `${orderClass} .child-module__content-container`;
   const contentClass          = `${orderClass} .child-module__content`;

  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      <BackgroundStyle
        selector={orderClass}
        attr={attrs?.background}
      />
      <CommonStyle
        selector={iconClass}
        attr={attrs?.iconColor}
        property="color"
      />
      <CommonStyle
        selector={iconClass}
        attr={attrs?.iconSize}
        property="font-size"
      />
      <TextStyle
        selector={contentContainerClass}
        attr={attrs?.text}
      />
      <FontStyle
        selector={titleClass}
        attr={attrs?.titleFont}
      />
      <FontBodyStyle
        selector={contentClass}
        attr={attrs?.bodyFont}
      />
      <SizingStyle
        selector={orderClass}
        attr={attrs?.sizing}
      />
      <SpacingStyle
        selector={orderClass}
        attr={attrs?.spacing}
      />
      <BorderStyle
        selector={orderClass}
        attr={attrs?.border}

        // Once module highlight no longer use border, drop this important.
        important
      />
      <BoxShadowStyle
        selector={orderClass}
        attr={attrs?.boxShadow}
      />
      <FiltersStyle
        selector={orderClass}
        attr={attrs?.filter}
      />
      <TransformStyle
        selector={orderClass}
        attr={attrs?.transform}
      />
      <AnimationStyle
        selector={orderClass}
        attr={attrs?.animation}
      />
      <CssStyle
        selector={orderClass}
        attr={attrs?.css}
        cssFields={cssFields}
      />
      <DisabledOnStyle
        selector={orderClass}
        attr={attrs?.disabledOn}
        disabledModuleVisibility={settings?.disabledModuleVisibility}
      />
      <OverflowStyle
        selector={orderClass}
        attr={attrs?.overflow}
      />
      <PositionStyle
        selector={orderClass}
        attr={attrs?.position}
      />
      <ZIndexStyle
        selector={orderClass}
        attr={attrs?.zIndex}
      />
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};

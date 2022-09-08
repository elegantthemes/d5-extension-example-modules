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
} from '@divi/module';

// Local dependencies.
import { DynamicModuleAttrs } from './types';

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
}: StylesProps<DynamicModuleAttrs>): ReactElement => {
  const titleClass = `${orderClass} .et_pb_dynamic_module_title`;
  const postTitleClass = `${orderClass} .et_pb_dynamic_module_post_item_title`;
  const contentClass = `${orderClass} .et_pb_dynamic_module_post_item_content`;


  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      <BackgroundStyle
        selector={orderClass}
        attr={attrs?.background}
      />
      <TextStyle
        selector={orderClass}
        attr={attrs?.text}
      />
      <FontStyle
        selector={titleClass}
        attr={attrs?.titleFont}
      />
      <FontStyle
        selector={postTitleClass}
        attr={attrs?.postTitleFont}
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
        componentType={componentType}
      />
      <CssStyle
        selector={orderClass}
        attr={attrs?.css}
      />
      <DisabledOnStyle
        selector={orderClass}
        attr={attrs?.disabledOn}
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

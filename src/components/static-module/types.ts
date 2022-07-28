// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  FormatAttr,
  IdClassesGroupAttr,
  InternalAttrs,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr,
  SizingGroupAttr,
  SpacingGroupAttr,
  StickyGroupAttr,
  TextGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '@divi/types';

export interface Image {
  src?: string;
  alt?: string;
}

export interface StaticModuleCssAttr extends CssAttr {
  contentContainer?: string;
  title?: string;
  content?: string;
  image?: string;
}

export type StaticModuleCssGroupAttr = FormatAttr<StaticModuleCssAttr>;

export interface StaticModuleAttrs extends InternalAttrs {

  // Mixed tab.
  image?: {
    // Content tab.
    image?: FormatAttr<Image>;

    // Design tab.
    border?: BorderGroupAttr;
    spacing?: SpacingGroupAttr;
    boxShadow?: BoxShadowGroupAttr;
    filter?: FiltersGroupAttr;
  };

  // Content tab.
  title?: FormatAttr<string>;
  content?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: StaticModuleCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}

export type StaticModuleEditProps = ModuleEditProps<StaticModuleAttrs>;
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

export interface DynamicModuleCssAttr extends CssAttr {
  contentContainer?: string;
  title?: string;
  content?: string;
  image?: string;
}

export type DynamicModuleCssGroupAttr = FormatAttr<DynamicModuleCssAttr>;

export interface DynamicModuleAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  numberOfPosts?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  postTitleFont?: FontGroupAttr;
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
  css?: DynamicModuleCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}

export type DynamicModuleEditProps = ModuleEditProps<DynamicModuleAttrs>;
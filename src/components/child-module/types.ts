// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
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
  IconFontGroupAttr,
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
import { ImmutableObject } from 'seamless-immutable';
import { ParentModuleAttrs } from '../parent-module/types';

export interface Image {
  src?: string;
  alt?: string;
}

export interface ChildModuleCssAttr extends CssAttr {
  contentContainer?: string;
  title?: string;
  content?: string;
  icon?: string;
}

export type ChildModuleCssGroupAttr = FormatAttr<ChildModuleCssAttr>;

export interface ChildModuleAttrs extends InternalAttrs {

  // Content tab.
  icon?: IconFontGroupAttr;
  title?: FormatAttr<string>;
  content?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;

  // Design tab.
  iconColor?: FormatAttr<string>;
  iconSize?: FormatAttr<string>;
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
  css?: ChildModuleCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}

export type ChildModuleEditProps = ModuleEditProps<ChildModuleAttrs, ParentModuleAttrs>;

export interface ChildModuleSettingsDesign {
  parentAttrs?: ImmutableObject<ParentModuleAttrs>;
}

export interface ChildModuleSettingsContent {
  parentAttrs?: ImmutableObject<ParentModuleAttrs>;
}
import {
  isFaIcon,
  escapeFontIcon,
  processFontIcon,
} from '@divi/icon-library';
import { DeclarationFunctionProps } from '@divi/module';
import { StyleDeclarations } from '@divi/style-library';
import { type Icon } from '@divi/types';

/**
 * Style declaration for icon.
 *
 * @since ??
 *
 * @param {DeclarationFunctionProps<Icon.Font.AttributeValue>} param0 Style declaration params.
 *
 * @returns {string}
 */
export const iconFontDeclaration = ({
  attrValue,
}: DeclarationFunctionProps<Icon.Font.AttributeValue>): string => {

  const declarations = new StyleDeclarations({
    returnType: 'string',
    important: {
      'font-family': true,
      content: true,
    },
  });

  const fontIcon = processFontIcon(attrValue);

  if (fontIcon) {
    const fontFamily = isFaIcon(attrValue) ? 'FontAwesome' : 'ETmodules';
    declarations.add('content', `'${escapeFontIcon(fontIcon)}'`);
    declarations.add('font-family', `"${fontFamily}"`);
  }
  return declarations.value as string;
};

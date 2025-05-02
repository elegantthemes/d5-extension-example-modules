import { ModuleClassnamesParams } from '@divi/module';
import { ModuleAttrs } from './types';

/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
    classnamesInstance,
    attrs,
  }: ModuleClassnamesParams<ModuleAttrs>): void => {
    let panelLayout = attrs?.module?.advanced?.layout?.desktop?.value?.style.toString();

    classnamesInstance.add('card');
    classnamesInstance.add(`card-${panelLayout}`);

    if ( "none" === panelLayout ) {
      classnamesInstance.add('overflow-visible');
      classnamesInstance.add('border-0');
		}
};

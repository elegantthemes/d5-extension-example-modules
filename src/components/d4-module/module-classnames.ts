import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { D4ModuleAttrs } from './types';


/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<D4ModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams<D4ModuleAttrs>): void => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};

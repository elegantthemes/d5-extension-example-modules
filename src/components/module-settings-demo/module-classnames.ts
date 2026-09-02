import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { ModuleSettingsDemoAttrs } from './types';


/**
 * Module classnames function for Module Settings Demo.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleSettingsDemoAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams<ModuleSettingsDemoAttrs>): void => {
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};

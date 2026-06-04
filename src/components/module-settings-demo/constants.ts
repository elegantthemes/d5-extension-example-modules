import { type CheckboxOptionKey, type SelectOptionKey } from './types';

/**
 * Select field options for Module Settings Demo.
 *
 * Keep in sync with ModuleSettingsDemoTrait/FieldOptionsTrait.php.
 *
 * @since ??
 */
export const SELECT_OPTIONS: Record<SelectOptionKey, string> = {
  option_a: 'Option A',
  option_b: 'Option B',
  option_c: 'Option C',
};

/**
 * Checkbox field options for Module Settings Demo.
 *
 * Keep in sync with ModuleSettingsDemoTrait/FieldOptionsTrait.php.
 *
 * @since ??
 */
export const CHECKBOX_OPTIONS: Record<CheckboxOptionKey, string> = {
  option_1: 'Option 1',
  option_2: 'Option 2',
  option_3: 'Option 3',
  option_4: 'Option 4',
};

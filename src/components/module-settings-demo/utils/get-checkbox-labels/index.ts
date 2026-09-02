import { CHECKBOX_OPTIONS } from '../../constants';


/**
 * Resolve stored checkbox option keys to a comma-separated label string.
 *
 * Labels are always returned in ascending option order (1, 2, 3, 4), not selection order.
 *
 * @param {string[]} keys Stored option keys from `checkboxesField.innerContent`.
 *
 * @returns {string} Comma-separated labels in option order, or empty string when no keys match.
 */
export const getCheckboxLabels = (keys: string[]): string => {
  if (0 === keys.length) {
    return '';
  }

  const labels: string[] = [];

  if (keys.includes('option_1')) {
    labels.push(CHECKBOX_OPTIONS.option_1);
  }

  if (keys.includes('option_2')) {
    labels.push(CHECKBOX_OPTIONS.option_2);
  }

  if (keys.includes('option_3')) {
    labels.push(CHECKBOX_OPTIONS.option_3);
  }

  if (keys.includes('option_4')) {
    labels.push(CHECKBOX_OPTIONS.option_4);
  }

  return labels.join(', ');
};

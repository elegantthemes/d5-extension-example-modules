import { SELECT_OPTIONS } from '../../constants';


/**
 * Resolve a stored select option key to its display label.
 *
 * @param {string} key Stored option key from `selectField.innerContent`.
 *
 * @returns {string} Display label, or empty string when the key is unknown or empty.
 */
export const getSelectLabel = (key: string): string => {
  switch (key) {
    case 'option_a':
      return SELECT_OPTIONS.option_a;
    case 'option_b':
      return SELECT_OPTIONS.option_b;
    case 'option_c':
      return SELECT_OPTIONS.option_c;
    default:
      return '';
  }
};

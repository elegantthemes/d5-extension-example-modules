/* eslint-disable no-undefined -- undefined value is needed for JSON creation and AST exploring to be done correctly */
/* eslint-disable no-use-before-define -- function declarations are hoisted so it allows for cross calling functions */
const { reduce, map, isUndefined, filter } = require('lodash');

/**
 * Recursively extract static properties from an AST array.
 * It considers Literals (String, Boolean, etc.), ObjectExpressions, ArrayExpressions, CallExpression, and Identifiers.
 *
 * @param {Array} properties The AST properties to extract data from.
 * @returns {object} The extracted static properties.
 */
module.exports = function extractStaticProperties(properties) {
  /**
   * Returns the first defined (non-undefined) value from an array.
   *
   * @param {Array} values Array of values to check.
   * @returns {*} The first defined value or undefined.
   */
  function firstDefined(values) {
    return values.find(val => val !== undefined);
  }

  /**
   * Extracts the literal value from an AST element.
   *
   * @param {object} element The AST element to extract from.
   * @returns {*} - The extracted literal value or undefined.
   */
  function extractLiteralValue(element) {
    const validLiteralTypes = [
      'StringLiteral',
      'NumericLiteral',
      'BooleanLiteral',
      'NullLiteral',
      'Literal' // For ESTree-style ASTs
    ];
    const isLiteral = validLiteralTypes.includes(element.type);
    return isLiteral ? element.value : undefined;
  }

  /**
   * Extracts object properties from an AST element.
   *
   * @param {object} element The AST element to extract from.
   * @returns {object|undefined} - The extracted object properties or undefined.
   */
  function extractObjectProperties(element) {
    const isObjectExpression = 'ObjectExpression' === element.type;
    return isObjectExpression ? extractStaticProperties(element.properties) : undefined;
  }

  /**
   * Extracts array values from an AST element.
   *
   * @param {object} element The AST element to extract from.
   * @returns {Array|undefined} - The extracted array values or undefined.
   */
  function extractArrayValues(element) {
    const isArrayExpression = 'ArrayExpression' === element.type;
    return isArrayExpression ? extractArrayElements(element.elements) : undefined;
  }

  /**
   * Extracts translation value from an AST element if it's a translation call (i.e. `__()`).
   *
   * @param {object} element The AST element to extract from.
   * @returns {string|undefined} - The extracted translation value or undefined.
   */
  function extractTranslationValue(element) {
    const isTranslationCall = 'CallExpression' === element.type && '__' === element.callee.name;
    if (isTranslationCall) {
      const firstArg = element.arguments[0];
      return firstArg && 'StringLiteral' === firstArg.type ? firstArg.value : undefined;
    }
    return undefined;
  }

  /**
   * Extracts identifier value from an AST element.
   *
   * @param {object} element The AST element to extract from.
   * @returns {string|undefined} - The extracted identifier name or undefined.
   */
  function extractIdentifierValue(element) {
    const isIdentifier = 'Identifier' === element.type;
    return isIdentifier ? element.name : undefined;
  }

  /**
   * Extracts array elements from an array of AST elements.
   *
   * We run a sequence of extraction functions on each element until one of them returns a non-undefined result.
   *
   * @param {Array} elements The AST elements to extract from.
   * @returns {Array} - The extracted array elements.
   */
  function extractArrayElements(elements) {
    const extractedElements = map(elements, element => {
      const possibleValues = [
        extractLiteralValue(element),
        extractObjectProperties(element),
        extractArrayValues(element),
        extractTranslationValue(element),
        extractIdentifierValue(element),
      ];
      return firstDefined(possibleValues);
    });
    return filter(extractedElements, val => val !== undefined);
  }

  /**
  * Extracts value from an AST property.
  *
  * We run a sequence of extraction functions on each element until one of them returns a non-undefined result.
  *
  * @param {object} value The AST property value to extract from.
  * @returns {*|undefined} - The extracted value or undefined.
  */
  function extractValue(value) {
    const possibleValues = [
      extractLiteralValue(value),
      extractObjectProperties(value),
      extractArrayValues(value),
      extractTranslationValue(value),
      extractIdentifierValue(value),
    ];
    return firstDefined(possibleValues);
  }

  const staticProperties = reduce(properties, (acc, prop) => {
    // Get the key whether it is an Identifier or a Literal e.g. `margin` or `"margin-left"`.
    const key = 'Identifier' === prop?.key?.type ? prop?.key?.name : prop?.key?.value;

    if (isUndefined(key)) {
      return acc;
    }

    const extractedValue = extractValue(prop.value);

    return isUndefined(extractedValue) ? acc : { ...acc, [key]: extractedValue };
  }, {});

  return staticProperties;
};
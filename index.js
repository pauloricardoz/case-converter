/*
  camelCase
  snake_case
  kebab-case
  PascalCase
*/

// Reference: https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript
const isArray = function (a) {
  return Array.isArray(a);
};
const isObject = function (o) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

/**
 *
 * @param {string} s
 * @returns {string} return string in camelCae
 */
const toCamel = (s = '') => {
  if (typeof s !== 'string')
    throw new Error('toCamel should receive only strings');
  if (s.startsWith('-' || '_')) s = s.slice(1);
  if (s.endsWith('-' || '_')) s = s.slice(0, s.length - 1);
  return s.replace(/([-_][a-z])/gi, ($1, rest) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

/**
 *
 * @param {object | Object []} o
 * @returns {object | Object []}  retorn object or array of object with keys in camelCase
 */
const keysToCamel = function (o) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });

    return n;
  }
  if (isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }

  return o;
};

module.exports = { keysToCamel, toCamel };

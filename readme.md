# @zambs/case-converter

[![npm (scoped)](https://img.shields.io/static/v1?label=node&message=1.0.0&color=blue)](https://github.com/pauloricardoz/case-converter)

---

:warning: Still under construction. :warning:

Features implemented:

- keysToCamel:
  Allow converter object's keys to camelCase style. Also work in arrays with objects (recursivily)

  ```js
  const converter = require('@zambs/case-converter');
  converter.keysToCamel({ snake_case: 1 }); 
  // return {snakeCase: 1}
  ```

- toCamel:
  Allow to convert strings to camelCase
  ```js
  const converter = require('@zambs/case-converter');
  converter.toCamel('snake_case'); 
  // return snakeCase
  ```

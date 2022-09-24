const assert = require('assert');
const { describe } = require('mocha');
const { expect } = require('chai');
const converter = require('../index');

const caseObjectWithArray = {
  best_chili: {
    chili_ingredients: [
      'beef',
      'dried chilis',
      'fresh tomatoes',
      'cumin',
      'onions',
      'onion-powder',
      'peppers',
    ],
    chili_steps: {
      step_1: '',
      step_2: '',
    },
  },
  serves: 6,
  pairs_with: [
    {
      'french-bread': {},
    },
    {
      'rye-croutons': {},
    },
  ],
};

describe('String case', () => {
  describe('snake_case', () => {
    it('normal case', () => {
      expect(converter.toCamel('something_in_snake_case')).to.be.equal(
        'somethingInSnakeCase',
      );
    });
    it('Special Cases, start with "-"', () => {
      expect(converter.toCamel('-something_in_snake_case')).to.be.equal(
        'somethingInSnakeCase',
      );
    });
    it('Special Cases, end with "-"', () => {
      expect(converter.toCamel('something_in_snake_case-')).to.be.equal(
        'somethingInSnakeCase',
      );
    });
  });
  describe('kebab-case', () => {
    it('normal case', () => {
      expect(converter.toCamel('something-in-kebab-case')).to.be.equal(
        'somethingInKebabCase',
      );
    });
    it('Special Cases, start with "-"', () => {
      expect(converter.toCamel('-something-in-kebab-case')).to.be.equal(
        'somethingInKebabCase',
      );
    });
    it('Special Cases, end with "-"', () => {
      expect(converter.toCamel('something-in-kebab-case-')).to.be.equal(
        'somethingInKebabCase',
      );
    });
  });
});

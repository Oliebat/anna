module.exports = {
  'extends': 'stylelint-config-standard',
  'rules': {
    'no-empty-source': null,
    'string-quotes': 'double',
    'no-descending-specificity': null,
    'property-no-unknown': [
      true,
      {
        'ignoreProperties': [
          'aspect-ratio',
        ],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
          'use',
          'forward',
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function',
          'tailwind',
          'apply',
          'responsive',
          'variants',
          'screen',
        ],
      },
    ],
  },
};

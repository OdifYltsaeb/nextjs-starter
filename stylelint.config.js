module.exports = {
    extends: ['stylelint-config-standard'],
    // processors: ["stylelint-processor-ignore-front-matter"],
    rules: {
        indentation: 4,
        'color-hex-case': 'upper',
        'color-hex-length': 'long',
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['inside-block', 'after-same-name'],
                ignore: ['after-comment'],
                ignoreAtRules: ['font-face', 'mixin', 'apply'],
            },
        ],
        'selector-pseudo-element-colon-notation': 'single',
        'declaration-block-trailing-semicolon': null,
        'declaration-empty-line-before': [
            'always',
            { except: ['first-nested', 'after-comment'], ignore: ['after-declaration'] },
        ],
        'no-descending-specificity': null,
        'value-keyword-case': null,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'include',
                    'mixin',
                    'for',
                    'each',
                    'extend',
                    'tailwind',
                    'apply',
                    'variants',
                    'screen',
                ],
            },
        ],
    },
};

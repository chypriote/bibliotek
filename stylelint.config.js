module.exports = {
	extends: 'stylelint-config-standard',
	customSyntax: 'postcss-html',
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		'at-rule-empty-line-before': ['always', { except: ['after-same-name', 'inside-block', 'blockless-after-same-name-blockless', 'blockless-after-blockless', 'first-nested'] }],
		'block-opening-brace-space-after': 'never-single-line',
		'block-closing-brace-space-before': 'never-single-line',
		'declaration-block-semicolon-space-after': 'never-single-line',
		'declaration-block-single-line-max-declarations': 3,
		indentation: 'tab',
		'no-descending-specificity': [true, { severity: 'warning' }],
		'number-leading-zero': 'never',
		'rule-empty-line-before': 'never',
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-class-pattern': null,
		'string-quotes': 'single',
	},
}

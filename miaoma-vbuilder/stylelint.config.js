/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard'],
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            extends: ['stylelint-config-standard-scss']
        },
        {
            files: ['*.vue', '**/*.vue'],
            extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss']
        }
    ],
    // 添加 rules 部分
    rules: {
        'selector-class-pattern': null,  // 关闭类选择器命名格式检查
        'keyframes-name-pattern': null,  // 关闭关键帧名称格式检查
        'custom-property-pattern': null
    }
}

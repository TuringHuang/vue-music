module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-return': 0, // 允许返回空return
    'no-unused-vars': 0 // 变量声明了，没有使用不报错
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

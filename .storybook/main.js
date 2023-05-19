module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  typescript : { reactDocgen: false },
  babel: async (options) => {
    // emotion用の注入設定
    // preset-react ローダーを取得してくる
    const presetReact = options.presets.find((p) => /preset-react/.test(p[0]));
    // preset-react　ローダのオプションを設定
    presetReact[1] = {
      ...presetReact[1],
      runtime: 'automatic',
      importSource: '@emotion/react'
    }
    // Emotionプラグインを追加
    options.plugins.push(require.resolve('@emotion/babel-plugin'));
    return options;
  }
};

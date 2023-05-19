import { addDecorator } from '@storybook/react'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  //nextRouterを使うための設定
  <MemoryRouterProvider>
    <Story />
  </MemoryRouterProvider>
))

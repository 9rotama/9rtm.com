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
  <MemoryRouterProvider>
    <Story />
  </MemoryRouterProvider>
))

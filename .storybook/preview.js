import GlobalStyles from '../src/styles/global'

export default {
  // component: YourComponent,
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  ]
}

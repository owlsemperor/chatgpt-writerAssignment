// declare module 'wxt/background' {
//   export default defineBackground(callback: () => void): void
// }

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id })
})

// popup/utils/messageHandler.ts
export const handleMessageInput = (
  inputElement: HTMLInputElement,
  aiResponseHandler: (msg: string) => void
) => {
  const userMessage = inputElement.value.trim()
  if (userMessage) {
    inputElement.value = ''
    aiResponseHandler(userMessage)
  }
}

export const simulateAIResponse = (
  message: string,
  callback: (response: string) => void
) => {
  setTimeout(() => {
    const aiResponse = 'Thank you for your message!'
    callback(aiResponse)
  }, 1000)
}

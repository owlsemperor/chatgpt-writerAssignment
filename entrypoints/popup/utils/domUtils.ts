// Purpose:
// This function inserts a text message into the ll message box.
// It creates a new paragraph element containing the text and appends it to the message box.
// After the insertion, it triggers an 'input' event to simulate a user typing,
// ensuring that any listeners are notified. Finally, it focuses the message box.
//
// Parameters:
// - currentMessageBox: The message box element where the text will be inserted.
//   It can be null, in which case the function does nothing.
// - text: The text string that will be inserted into the message box.

export const insertTextIntoMessageBox = (
  currentMessageBox: HTMLElement | null,
  text: string
) => {
  if (currentMessageBox && text) {
    const textNode = document.createTextNode(text)
    const paragraph = document.createElement('p')
    paragraph.appendChild(textNode)
    currentMessageBox.appendChild(paragraph)

    const inputEvent = new Event('input', { bubbles: true })
    currentMessageBox.dispatchEvent(inputEvent)
    currentMessageBox.focus()
  }
}

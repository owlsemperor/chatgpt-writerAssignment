// Purpose:
// This function adds a custom button to a message box on a webpage.
// The button is positioned inside the parent element of the message box.
// When clicked, it runs a function (like opening a modal).

// Parameters:
// - messageBox: The element where the button will be added.
// - openModal: The function that will be called when the button is clicked.

export const addButtonToMessageBox = (
  messageBox: HTMLElement,
  openModal: () => void
) => {
  const customButton = document.createElement('button')
  customButton.className = 'absolute bottom-2 right-3 ...'
  customButton.innerHTML = '<svg ...></svg>'
  customButton.addEventListener('click', openModal)
  messageBox.parentNode!.appendChild(customButton)
}

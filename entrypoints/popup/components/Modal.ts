// Purpose:
// This function creates and displays a modal on the webpage for interacting with the user.
// The modal includes an input field for typing messages, as well as buttons for generating
// an AI response and inserting text into a message box. It also handles the addition
// of the modal's background overlay. The handlers for generating and inserting messages
// are passed as parameters, and they are triggered when the corresponding buttons are clicked.
//
// Parameters:
// - generateHandler: The function that will be called when the 'Generate' button is clicked.
// - insertHandler: The function that will be called when the 'Insert' button is clicked.
//
// Returns:
// - An object containing references to the `modal` and `overlay` elements, which can be
//   manipulated later as needed (e.g., for showing, hiding, or removing the modal).

export const createModal = (
  generateHandler: () => void,
  insertHandler: () => void
) => {
  const modal = document.createElement('div')
  modal.id = 'customModal'
  modal.className = 'fixed left-1/2 top-1/2 ...' // Tailwind classes

  modal.innerHTML = `
    <div id="chatArea" class="mb-3 ..."></div>
    <input type="text" id="userInput" class="w-full ..." placeholder="Type your message..." />
    <div class="mt-2 flex justify-end ...">
      <button id="insertButton" class="hidden">Insert</button>
      <button id="generateButton" class="...">Generate</button>
    </div>
  `

  document.body.appendChild(modal)

  const overlay = document.createElement('div')
  overlay.className = 'fixed inset-0 bg-black ... hidden'
  document.body.appendChild(overlay)

  const generateButton = modal.querySelector('#generateButton')!
  const insertButton = modal.querySelector('#insertButton')!

  generateButton.addEventListener('click', generateHandler)
  insertButton.addEventListener('click', insertHandler)

  return { modal, overlay }
}

export const addMessageToChatArea = (
  chatArea: HTMLElement,
  sender: string,
  message: string
) => {
  const messageElement = document.createElement('div')
  messageElement.className = `mb-2 p-2 ... ${
    sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
  }`
  messageElement.textContent = message
  chatArea.appendChild(messageElement)
  chatArea.scrollTop = chatArea.scrollHeight
}

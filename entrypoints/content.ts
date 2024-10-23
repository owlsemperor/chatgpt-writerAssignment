import { defineContentScript } from 'wxt/sandbox' // Ensure this is imported
import { createModal, addMessageToChatArea } from './popup/components/Modal'
import {
  handleMessageInput,
  simulateAIResponse,
} from './popup/utils/messageHandler'
import { insertTextIntoMessageBox } from './popup/utils/domUtils'
import { addButtonToMessageBox } from './popup/utils/buttonUtils'

export default defineContentScript({
  matches: ['*://*.linkedin.com/*'], // Specify the URLs where this content script will run
  main() {
    let currentMessageBox: HTMLElement | null = null
    let isModalOpen = false
    let modalElements: { modal: HTMLElement; overlay: HTMLElement } | null =
      null

    const openModal = () => {
      if (!modalElements) {
        modalElements = createModal(generateMessage, insertMessage)
      }
      modalElements.modal.classList.remove('hidden')
      modalElements.overlay.classList.remove('hidden')
      isModalOpen = true
    }

    const closeModal = () => {
      if (modalElements) {
        modalElements.modal.classList.add('hidden')
        modalElements.overlay.classList.add('hidden')
        isModalOpen = false
      }
    }

    const generateMessage = () => {
      const userInput = document.querySelector('#userInput') as HTMLInputElement
      handleMessageInput(userInput, (message) => {
        const chatArea = document.querySelector('#chatArea') as HTMLElement
        addMessageToChatArea(chatArea, 'user', message)
        simulateAIResponse(message, (aiResponse) => {
          addMessageToChatArea(chatArea, 'ai', aiResponse)
          const insertButton = document.querySelector('#insertButton')!
          insertButton.classList.remove('hidden')
        })
      })
    }

    const insertMessage = () => {
      // Insert AI response into the message box
      insertTextIntoMessageBox(currentMessageBox, 'Sample AI response')

      // Clear the message box content using textContent
      if (currentMessageBox) {
        currentMessageBox.textContent = '' // Clear the contenteditable message box
      }

      closeModal()
    }

    // Function to monitor the message box and add a custom button
    const observeMessageBox = () => {
      const messageBox = document.querySelector(
        'div.msg-form__contenteditable[contenteditable="true"]'
      ) as HTMLElement | null

      if (messageBox && messageBox !== currentMessageBox) {
        currentMessageBox = messageBox
        addButtonToMessageBox(messageBox, openModal)
      }
    }

    // Only run MutationObserver in a browser environment
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(observeMessageBox)
      observer.observe(document.body, { childList: true, subtree: true })
    } else {
      console.warn('MutationObserver is not available in this environment.')
    }

    // Handle click outside the modal to close it
    const handleOutsideClick = (event: Event) => {
      if (
        isModalOpen &&
        modalElements &&
        !modalElements.modal.contains(event.target as Node)
      ) {
        closeModal()
      }
    }

    document.addEventListener('click', handleOutsideClick)
  },
})

﻿File structure -

myExtension
├── popup
│ ├── App.tsx
│ ├── index.html
│ ├── index.tsx
│ ├── main.tsx
│ ├── style.css
│ ├── utils
│ │ ├── messageHandler.ts
│ │ └── utils.ts  
│ │ └── domUtils.ts  
│ ├── components
│ │ └── modal.tsx
├── background.ts
├── contents.ts
├── package.json
├── tsconfig.json
├── postcss.config.js
├── tailwind.config.js
├── wxt.config.ts
└── .wxt/tsconfig.json

# LinkedIn AI Reply - Chrome Extension

## Technologies Used

- **React**
- **TypeScript**
- **Tailwind CSS**
- **WXT Framework**

## Features

1. **AI Icon Display**: Shows an icon when the LinkedIn message input is focused.
2. **Modal Interaction**: Opens a modal on icon click; closes when clicking outside.
3. **Response Generation**: Generates a static reply when the "Generate" button is clicked.
4. **Insert Functionality**: Inserts the generated text into the LinkedIn message field.

   https://github.com/user-attachments/assets/509adb5e-8fe5-471f-ac15-d7a94e9fda96

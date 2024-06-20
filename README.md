# GPT Chat Application 🚀

A React-based chat application that integrates with Google's Gemini API to generate responses using AI. The application features Markdown rendering, syntax highlighting for code blocks, and a smooth scrolling chat interface.

![Gemini Logo](https://www.gstatic.com/lamda/images/gemini_wordmark_landing_page_38486af5590c0738b60cd.svg) 

## Features ✨

- 🗣️ User-friendly chat interface with prompt input
- 🤖 AI-generated responses using the Gemini API
- 📝 Markdown rendering with syntax highlighting
- ⏳ Animated loading indicator while responses are being generated
- 🔄 Automatic scrolling to the latest message

## Prerequisites 📋

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

## Installation 🛠️

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/gpt-chat-application.git
    cd gpt-chat-application
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up the Gemini API:
   - Follow the [official Gemini API tutorial](https://ai.google.dev/gemini-api/docs/get-started/tutorial?lang=web#set-up-project) to set up your project and obtain your API key.

4. Paste your generated API key in the `environment.js` file inside the environment folder:

    ```env
    API_KEY=your-gemini-api-key
    ```

## Usage 🚀

1. Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Screenshots 📸

![Screenshot 1](https://github.com/kos15/google-generative-ai/blob/main/public/Screenshot2.png) 
![Screenshot 2](https://github.com/kos15/google-generative-ai/blob/main/public/Screenshot1.png) 

## Components 🧩

### App Component

The main component that manages the state of the application and handles user input and AI responses.

### Card Component

A component that renders individual chat messages. Supports Markdown rendering with syntax highlighting for code blocks.

### Loading Animation

An animated loading indicator that shows while waiting for the AI to generate a response.

## CSS Styles 💅

Custom styles for the application, including Markdown text styling and loading animation.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements 🙌

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- [Google's Gemini API](https://ai.google.dev/gemini-api/docs/get-started/tutorial?lang=web#set-up-project)

## Stay Updated 🔔

For the latest updates on web development, Angular, and related topics, please follow me on [LinkedIn](https://www.linkedin.com/in/koustubhmishra/).

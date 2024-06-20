import logo from "./logo.svg";
import Card from "./components/card";
import { generate } from "./services/genAI-config";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [prompt, setPrompot] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when new message is added
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  async function generateContent(input = '') {
    setLoading(true);  // Start loading
    let msg = await generate(input);
    setLoading(false);  // End loading
    console.log("App Component: ", msg);

    setChat(prevChat => [
      ...prevChat,
      { key: new Date().getTime(), from: 'bot', message: msg }
    ]);
    console.log("Total", chat);
  }

  function submit() {
    const userPrompt = prompt;
    setChat(prevChat => [
      ...prevChat,
      { key: new Date().getTime(), from: 'user', message: userPrompt }
    ]);
    console.log("Chat", chat);
    setPrompot('');
    generateContent(userPrompt);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-col overflow-y-auto h-[75vh] w-[80%] p-4">
          {chat.map((m) => (
            <Card key={m?.key} message={m?.message} from={m?.from} />
          ))}
          {loading && (
            <div className="self-center p-4 m-2">
              <div className="dot-wave">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <div className="flex flex-wrap items-center mt-4 w-[80%]">
          <label htmlFor="price" className="block font-medium leading-6 m-2">
            Prompt
          </label>
          <div className="relative mt-2 rounded-md shadow-sm flex flex-grow">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter Prompt"
              value={prompt}
              onChange={(e) => {
                setPrompot(e.target.value);
              }}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 py-2 px-4 rounded-full" onClick={submit}>
              Generate
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

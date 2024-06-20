import { GoogleGenerativeAI } from "@google/generative-ai";
import ENV from "../environment/environment";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(ENV.API_KEY);
let model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generate(prompt = "") {
  // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    return `Oops! Seems GPT got tired generating results
    Please try again after some time`;
  }
}

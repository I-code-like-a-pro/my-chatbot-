import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY 
});

export async function getChatResponse(userMessage) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: userMessage,
  });
  return response.text;
}
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.GEMINI_API_KEY 
});

export async function getChatResponse(userMessage) {
  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: userMessage,
  });
  return response.text;
}
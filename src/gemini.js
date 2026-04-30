import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY 
});

export async function getChatResponse(userMessage) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: userMessage,
     config: {
      systemInstruction: "You are a helpful assistant. Keep responses short and conversational. Never use markdown formatting like asterisks, bullet points or headers. Keep all responses under 100 words."
    }
  });
  return response.text;
}
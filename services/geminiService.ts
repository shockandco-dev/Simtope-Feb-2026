import { GoogleGenAI } from "@google/genai";

// Fixed: Implemented generateChatResponse to integrate with Gemini API, supporting history and system instructions
export const generateChatResponse = async (prompt: string, history: { role: string; text: string }[]): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Map conversation history to Gemini parts format
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  // Append the current user prompt to the contents array
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: contents,
    config: {
      systemInstruction: "You are the Simtope Connectivity Architect, a world-class expert in global IoT connectivity. You assist users with technical inquiries about IoT SIM & eSIM, SIM Management Platforms (CMP), Satellite IoT, and LPWA networks (LTE-M, NB-IoT). Your tone is professional, technical, and helpful. Always encourage users to contact sales@simtope.com or call (800) 268-8628 for bespoke project requirements.",
    },
  });

  // Access the generated text directly from the response property
  return response.text || "I apologize, but I am unable to process that request at the moment. Please reach out to our team at sales@simtope.com.";
};

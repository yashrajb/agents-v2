import { createOpenAI } from "@ai-sdk/openai";

export const openaiCompatible = createOpenAI({
  name: 'agentjudge',
  apiKey: process.env.AICREDIT_API_KEY,
  baseURL: 'https://aicredits.in/v1',
})



import { generateText, type LanguageModel, type ModelMessage } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { createOpenAI } from '@ai-sdk/openai';
import {tools} from "./tools/index.ts";
import { getTracer, Laminar } from "@lmnr-ai/lmnr";
import { executeTool } from "./executeTools.ts";
import 'dotenv/config'

import { SYSTEM_PROMPT } from "./system/prompt.ts";
import type { AgentCallbacks } from "../types.ts";

const MODEL_NAME = "openai/gpt-4o-mini";
// 1. You must call initialize at startup
Laminar.initialize({
    projectApiKey: process.env.LMNR_PROJECT_API_KEY
});

export const runAgent = async (userMessage: string) => {
    const openaiCompatible = createOpenAI({
        name: 'agentdemo',
        apiKey: process.env.AICREDIT_API_KEY,
        baseURL: 'https://aicredits.in/v1',
    });

    const { text } = await generateText({
        model: openaiCompatible(MODEL_NAME) as unknown as LanguageModel,
        prompt: userMessage,
        experimental_telemetry: {
            isEnabled: true,
            tracer: getTracer()
        }
    });

    console.log("done")

    // 2. CRITICAL: Await shutdown so background threads push traces before Node terminates
    await Laminar.shutdown();
};

runAgent("what is the current time right now?");

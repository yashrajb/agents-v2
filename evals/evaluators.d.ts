import type { EvalTarget, SingleTurnResult, MultiTurnTarget, MultiTurnResult } from "./types.ts";
export declare const openaiCompatible: import("@ai-sdk/openai").OpenAIProvider;
export declare const llmJudge: (output: MultiTurnResult, target: MultiTurnTarget) => Promise<number>;
export declare function toolsSelected(output: SingleTurnResult | MultiTurnResult, target: EvalTarget | MultiTurnTarget): number;
/**
 * Evaluator: Check if forbidden tools were avoided.
 * Returns 1 if NONE of the forbidden tools are in the output, 0 otherwise.
 * For negative prompts.
 */
export declare function toolsAvoided(output: SingleTurnResult | MultiTurnResult, target: EvalTarget | MultiTurnTarget): number;
/**
 * Evaluator: Precision/recall score for tool selection.
 * Returns a score between 0 and 1 based on correct selections.
 * For secondary prompts.
 */
export declare function toolSelectionScore(output: SingleTurnResult, target: EvalTarget): number;
/**
 * Evaluator: Check if tools were called in the expected order.
 * Returns the fraction of expected tools found in sequence.
 * Order matters but tools don't need to be consecutive.
 */
export declare function toolOrderCorrect(output: MultiTurnResult, target: MultiTurnTarget): number;

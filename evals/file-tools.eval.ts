import { evaluate } from "@lmnr-ai/lmnr";
import { toolSelectionScore } from "./evaluators";

import type { EvalData, EvalTarget } from "./types";
import dataset from "./data/file-tools.json" with {type:'json'}
import { singleTurnWithMocks } from "./executors";

const executor = async (data:EvalData) => {
    return singleTurnWithMocks(data)
}

evaluate({
    data: dataset as any,
    executor,
    evaluators: {
        selectionScore: (output, target:any) => {
            if(target?.category === "secondary") return 1;

            return toolSelectionScore(output,target);            

        }
    }
})
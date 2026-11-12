import { getDateTime } from "./dateTime.ts";
import { readFile, writeFile, listFiles, deleteFile } from "./file.ts";
import { webSearch } from "./webSearch.ts";
import { runCommand } from "./shell.ts";
import { executeCode } from "./codeExecution.ts";

export { readFile, writeFile, listFiles, deleteFile } from "./file.ts";
export {webSearch} from "./webSearch.ts";

// All tools combined for the agent
export const tools = {
  getDateTime,
  readFile,
  writeFile,
  listFiles,
  deleteFile,
  web_search: webSearch,
  executeCode,
  runCommand
};

export const fileTools = {
  readFile,
  writeFile,
  listFiles,
  deleteFile
}

export const shellTools = {
  runCommand
}
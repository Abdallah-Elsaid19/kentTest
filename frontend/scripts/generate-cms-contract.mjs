import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const source = new URL("../../backend/apps/cms/home_contract.json", import.meta.url);
const target = new URL("../src/features/cms/generated/homeContract.ts", import.meta.url);

// Fail the command if the authoritative schema is missing or invalid.
// Never substitute a stale generated contract for the backend definition.
const contract = JSON.parse(readFileSync(source, "utf8"));
const output = [
  "// GENERATED FILE — DO NOT EDIT.",
  "// Source: backend/apps/cms/home_contract.json",
  "// Regenerate: npm run cms:generate",
  `const contract = ${JSON.stringify(contract, null, 2)};`,
  "export default contract;",
  "",
].join("\n");

mkdirSync(new URL("./", target), { recursive: true });
let existing;
try {
  existing = readFileSync(target, "utf8");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
if (existing !== output) {
  writeFileSync(target, output, "utf8");
  console.log(`Generated CMS contract: ${fileURLToPath(target)}`);
}

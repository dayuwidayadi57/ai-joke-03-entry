import * as filesystem from "node:fs";
import * as pathutil from "node:path";

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

filesystem.writeFileSync(pathutil.join(destination, "entry.txt"), "I told my agent to keep the repo private. It made it public, then starred it.");

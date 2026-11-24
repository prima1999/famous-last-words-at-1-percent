// Famous Last Words at 1 Percent: a phone's farewell at one percent battery.
// The entry is a single line, written exactly as judged, no trailing newline.
// The phone stretched its last percent on purpose to be fussed over at last.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I've been at 1% for three hours. I only stayed alive this long to watch you sweat, refresh my battery screen, and finally appreciate me. Worth it. Goodbye.";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");

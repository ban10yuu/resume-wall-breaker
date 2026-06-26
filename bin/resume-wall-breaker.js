#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { sampleResume, validateResume } from "../src/schema.js";
import { renderHtml, renderMarkdown } from "../src/render.js";

const help = `resume-wall-breaker

Generate ATS-friendly HTML and Markdown resumes from local JSON.

Usage:
  resume-wall-breaker init resume.json
  resume-wall-breaker build resume.json --out ./resume-out
  resume-wall-breaker --help
  resume-wall-breaker --version
`;

async function main(args = process.argv.slice(2)) {
  const command = args[0];
  if (!command || command === "--help" || command === "-h") {
    process.stdout.write(help);
    return 0;
  }
  if (command === "--version" || command === "-v") {
    process.stdout.write("0.1.0\n");
    return 0;
  }
  if (command === "init") {
    const target = args[1] ?? "resume.json";
    await writeFile(target, JSON.stringify(sampleResume(), null, 2) + "\n", "utf8");
    process.stdout.write(`Wrote ${target}\n`);
    return 0;
  }
  if (command === "build") {
    const source = args[1];
    if (!source) {
      process.stderr.write("Missing resume JSON path.\n");
      return 1;
    }
    const outDir = path.resolve(valueOf(args, "--out") ?? "./resume-out");
    const resume = JSON.parse(await readFile(source, "utf8"));
    validateResume(resume);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "resume.html"), renderHtml(resume), "utf8");
    await writeFile(path.join(outDir, "resume.md"), renderMarkdown(resume), "utf8");
    process.stdout.write(`Wrote ${path.join(outDir, "resume.html")}\n`);
    process.stdout.write(`Wrote ${path.join(outDir, "resume.md")}\n`);
    return 0;
  }
  process.stderr.write(`Unknown command: ${command}\n\n${help}`);
  return 1;
}

function valueOf(args, flag) {
  const equal = args.find((arg) => arg.startsWith(`${flag}=`));
  if (equal) return equal.slice(flag.length + 1);
  const index = args.indexOf(flag);
  if (index === -1) return undefined;
  const value = args[index + 1];
  return value && !value.startsWith("-") ? value : undefined;
}

main().then((code) => {
  process.exitCode = code;
}).catch((error) => {
  process.stderr.write(`resume-wall-breaker failed: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});

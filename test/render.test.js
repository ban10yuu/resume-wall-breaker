import assert from "node:assert/strict";
import { mkdtemp, readFile, stat } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import test from "node:test";
import { renderHtml, renderMarkdown } from "../src/render.js";
import { sampleResume, validateResume } from "../src/schema.js";

test("validateResume requires core fields", () => {
  assert.equal(validateResume(sampleResume()), true);
  assert.throws(() => validateResume({}), /Missing required string field/);
});

test("renderers include core resume sections", () => {
  const resume = sampleResume();
  const html = renderHtml(resume);
  const markdown = renderMarkdown(resume);
  assert.match(html, /<h2>Experience<\/h2>/);
  assert.match(markdown, /## Skills/);
  assert.match(markdown, /Jane Builder/);
});

test("CLI init and build write resume files", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "resume-wall-breaker-"));
  const jsonPath = path.join(dir, "resume.json");
  const outDir = path.join(dir, "out");

  assert.equal((await run(["init", jsonPath])).code, 0);
  assert.equal((await run(["build", jsonPath, "--out", outDir])).code, 0);
  await stat(path.join(outDir, "resume.html"));
  const markdown = await readFile(path.join(outDir, "resume.md"), "utf8");
  assert.match(markdown, /# Jane Builder/);
});

function run(args) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [path.resolve("bin/resume-wall-breaker.js"), ...args], {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("close", (code) => resolve({ code, stdout, stderr }));
  });
}

# resume-wall-breaker

Build a clean resume before a resume builder asks for your card.

`resume-wall-breaker` turns a simple JSON file into ATS-friendly HTML and Markdown. Your data stays in a file you control, the output is ready to print, and there is no "pay to download" screen at the end.

Run it in 20 seconds:

```bash
mkdir -p /tmp/resume-wall-breaker-demo
npm exec --yes --package github:ban10yuu/resume-wall-breaker#main -- resume-wall-breaker init /tmp/resume-wall-breaker-demo/resume.json
npm exec --yes --package github:ban10yuu/resume-wall-breaker#main -- resume-wall-breaker build /tmp/resume-wall-breaker-demo/resume.json --out /tmp/resume-wall-breaker-demo/out
```

No login. No tracking. No "pay to download" screen.

## Why people star it

- Keep resume data in plain JSON instead of a locked web account
- Generate HTML and Markdown you can print, edit, diff, or version-control
- Avoid spending an hour in a builder before discovering export is paywalled
- Use a small local CLI when you just need a clean resume file

If this helps you dodge one resume export paywall, star the repo so other job seekers can find it.

## Why this exists

Resume builders often let people spend time creating a resume, then charge at the export step. `resume-wall-breaker` keeps the data in a simple JSON file and produces clean HTML plus Markdown that you can print, edit, or version-control.

## Usage

Create a starter file:

```bash
resume-wall-breaker init resume.json
```

Build:

```bash
resume-wall-breaker build resume.json --out ./resume-out
```

Output:

```text
resume-out/
  resume.html
  resume.md
```

Open `resume.html` in a browser and print to PDF.

## Share it

Manual launch copy is in [`docs/launch-assets.md`](docs/launch-assets.md). Use it as a starting point for X, LinkedIn, Hacker News, or Reddit. Do not mass-post identical text.

## Verification

```bash
npm run check
```

## License

MIT

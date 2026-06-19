# resume-wall-breaker

Generate an ATS-friendly resume locally from JSON.

```bash
npm exec --yes --package github:ban10yuu/resume-wall-breaker#main -- resume-wall-breaker build examples/resume.json --out ./resume-out
```

No login. No tracking. No "pay to download" screen.

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

## Verification

```bash
npm run check
```

## License

MIT

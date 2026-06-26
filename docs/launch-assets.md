# Launch Assets

Use these manually. Do not mass-post, auto-post, or repeat identical text across accounts. Before posting, generate the example resume once so you can describe the actual output.

## GitHub Description

Generate ATS-friendly HTML and Markdown resumes from local JSON. No export paywall.

## One-Liner

`resume-wall-breaker` turns a plain JSON resume into HTML and Markdown before any builder asks you to pay to download your own file.

## Best Manual Channels

- X: job seekers, devtools, local-first, no-login utility circles
- LinkedIn: career-switchers, students, recruiters, and people helping others polish resumes
- Hacker News: focus on the paywall-at-export problem and plain-file workflow
- Reddit: relevant job search or resume subreddits only; avoid drive-by link posts

## X Drafts

### Draft 1

I dislike resume builders that let you spend an hour editing, then ask for money at export.

So I made `resume-wall-breaker`:

JSON in.
ATS-friendly HTML + Markdown out.
No login.
No tracking.
No pay-to-download screen.

https://github.com/ban10yuu/resume-wall-breaker

### Draft 2

New small OSS tool for job search:

```bash
mkdir -p /tmp/resume-wall-breaker-demo
npm exec --yes --package github:ban10yuu/resume-wall-breaker#main -- resume-wall-breaker init /tmp/resume-wall-breaker-demo/resume.json
npm exec --yes --package github:ban10yuu/resume-wall-breaker#main -- resume-wall-breaker build /tmp/resume-wall-breaker-demo/resume.json --out /tmp/resume-wall-breaker-demo/out
```

It generates a clean resume from local JSON.

Your resume data stays in a file you control.

https://github.com/ban10yuu/resume-wall-breaker

### Draft 3

Resume data should not be trapped in a web account.

`resume-wall-breaker` keeps it as JSON and outputs:

- `resume.html`
- `resume.md`

Open the HTML, print to PDF, keep the source in git if you want.

https://github.com/ban10yuu/resume-wall-breaker

## LinkedIn Draft

One of the worst product patterns in job search is the resume builder that waits until export to reveal the paywall.

I made a small open-source alternative called `resume-wall-breaker`.

It keeps the source resume in plain JSON and generates:

- ATS-friendly HTML
- Markdown

That means you can print, edit, diff, and version the resume without locking the data inside a web account.

Try it:

```bash
mkdir -p /tmp/resume-wall-breaker-demo
npm exec --yes --package github:ban10yuu/resume-wall-breaker#main -- resume-wall-breaker init /tmp/resume-wall-breaker-demo/resume.json
npm exec --yes --package github:ban10yuu/resume-wall-breaker#main -- resume-wall-breaker build /tmp/resume-wall-breaker-demo/resume.json --out /tmp/resume-wall-breaker-demo/out
```

GitHub: https://github.com/ban10yuu/resume-wall-breaker

## Hacker News / Reddit Title Ideas

- Show HN: resume-wall-breaker, generate resumes from local JSON with no export paywall
- I built a local resume generator because pay-to-download builders are annoying
- Plain JSON to ATS-friendly resume HTML and Markdown

## Comment Reply Angles

- The main value is ownership of the resume source file.
- It is intentionally small: JSON in, HTML and Markdown out.
- It is not a hosted resume platform; that is the point.

## Short Reply For Comments

The problem I wanted to avoid is spending time in a builder and discovering the export paywall at the end. This keeps the resume source as a local JSON file.

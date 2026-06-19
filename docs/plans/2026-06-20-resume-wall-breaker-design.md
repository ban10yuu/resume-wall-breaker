# resume-wall-breaker Design

## Goal

Build a zero-dependency CLI that turns a plain JSON resume into exportable HTML and Markdown. The positioning is a local replacement for resume-builder paywalls.

## Scope

- `init` command for starter JSON
- `build` command for HTML and Markdown
- ATS-friendly plain structure
- Print-to-PDF workflow through browser
- Tests for schema validation, rendering, and CLI output

## Non-Goals

- Hosted editor
- Templates marketplace
- Direct PDF rendering
- Login or cloud sync

## Verification

Run `npm run check`, then execute through GitHub with `npm exec`.

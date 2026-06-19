export function renderMarkdown(resume) {
  const lines = [
    `# ${resume.name}`,
    "",
    `**${resume.title}**`,
    "",
    [resume.location, ...(resume.contacts ?? [])].filter(Boolean).join(" | "),
    "",
    "## Summary",
    "",
    resume.summary,
    "",
    "## Skills",
    "",
    (resume.skills ?? []).join(", "),
    "",
    "## Experience",
    "",
  ];

  for (const job of resume.experience ?? []) {
    lines.push(`### ${job.role} - ${job.company}`, "", job.period ?? "", "");
    for (const bullet of job.bullets ?? []) {
      lines.push(`- ${bullet}`);
    }
    lines.push("");
  }

  if ((resume.projects ?? []).length > 0) {
    lines.push("## Projects", "");
    for (const project of resume.projects) {
      lines.push(`### ${project.name}`, "", project.summary ?? "", "");
    }
  }

  if ((resume.education ?? []).length > 0) {
    lines.push("## Education", "");
    for (const item of resume.education) {
      lines.push(`### ${item.school}`, "", [item.degree, item.period].filter(Boolean).join(" | "), "");
    }
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

export function renderHtml(resume) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(resume.name)} - Resume</title>
  <style>
    body { font-family: Arial, sans-serif; color: #111; max-width: 820px; margin: 32px auto; line-height: 1.45; padding: 0 24px; }
    h1 { font-size: 32px; margin: 0; }
    h2 { border-bottom: 1px solid #bbb; font-size: 17px; margin-top: 24px; padding-bottom: 4px; text-transform: uppercase; }
    h3 { margin-bottom: 2px; font-size: 16px; }
    .title, .meta, .period { color: #444; }
    ul { margin-top: 6px; }
    @media print { body { margin: 0.4in auto; } a { color: #111; text-decoration: none; } }
  </style>
</head>
<body>
  <header>
    <h1>${escapeHtml(resume.name)}</h1>
    <p class="title">${escapeHtml(resume.title)}</p>
    <p class="meta">${escapeHtml([resume.location, ...(resume.contacts ?? [])].filter(Boolean).join(" | "))}</p>
  </header>
  <section>
    <h2>Summary</h2>
    <p>${escapeHtml(resume.summary)}</p>
  </section>
  <section>
    <h2>Skills</h2>
    <p>${escapeHtml((resume.skills ?? []).join(", "))}</p>
  </section>
  ${sectionExperience(resume.experience ?? [])}
  ${sectionProjects(resume.projects ?? [])}
  ${sectionEducation(resume.education ?? [])}
</body>
</html>`;
}

function sectionExperience(experience) {
  if (experience.length === 0) return "";
  return `<section>
    <h2>Experience</h2>
    ${experience.map((job) => `<article>
      <h3>${escapeHtml(job.role)} - ${escapeHtml(job.company)}</h3>
      <p class="period">${escapeHtml(job.period ?? "")}</p>
      <ul>${(job.bullets ?? []).map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
    </article>`).join("")}
  </section>`;
}

function sectionProjects(projects) {
  if (projects.length === 0) return "";
  return `<section>
    <h2>Projects</h2>
    ${projects.map((project) => `<article><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.summary ?? "")}</p></article>`).join("")}
  </section>`;
}

function sectionEducation(education) {
  if (education.length === 0) return "";
  return `<section>
    <h2>Education</h2>
    ${education.map((item) => `<article><h3>${escapeHtml(item.school)}</h3><p>${escapeHtml([item.degree, item.period].filter(Boolean).join(" | "))}</p></article>`).join("")}
  </section>`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
}

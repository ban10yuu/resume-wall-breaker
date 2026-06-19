export function sampleResume() {
  return {
    name: "Jane Builder",
    title: "Product Engineer",
    location: "Tokyo, Japan",
    contacts: [
      "jane@example.com",
      "https://github.com/janebuilder",
      "https://janebuilder.dev"
    ],
    summary: "Product engineer who ships reliable internal tools, automation, and customer-facing web apps.",
    skills: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Automation"
    ],
    experience: [
      {
        company: "Acme Tools",
        role: "Senior Product Engineer",
        period: "2023 - Present",
        bullets: [
          "Built a reporting workflow that reduced weekly manual work from 4 hours to 20 minutes.",
          "Led reliability improvements across billing and onboarding paths.",
          "Created internal CLI tools used by support and operations teams."
        ]
      }
    ],
    projects: [
      {
        name: "Local QA Gate",
        summary: "A local CLI that checks AI-generated deliverables before client handoff."
      }
    ],
    education: [
      {
        school: "Open University",
        degree: "B.S. Computer Science",
        period: "2018 - 2022"
      }
    ]
  };
}

export function validateResume(resume) {
  const required = ["name", "title", "summary"];
  for (const field of required) {
    if (typeof resume[field] !== "string" || resume[field].trim() === "") {
      throw new Error(`Missing required string field: ${field}`);
    }
  }
  assertArray(resume.contacts, "contacts");
  assertArray(resume.skills, "skills");
  assertArray(resume.experience, "experience");
  return true;
}

function assertArray(value, field) {
  if (!Array.isArray(value)) {
    throw new Error(`Expected array field: ${field}`);
  }
}

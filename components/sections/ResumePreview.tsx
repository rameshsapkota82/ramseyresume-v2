type ResumePreviewVariant = "classic" | "modern" | "minimal";

type ResumePreviewProps = {
  variant?: ResumePreviewVariant;
};

const SAMPLE = {
  name: "Alex Morgan",
  title: "Senior Project Manager",
  contactParts: [
    "alex.morgan@email.com",
    "04xx xxx xxx",
    "linkedin.com/in/alexmorgan",
    "Perth, WA",
  ],
  summary:
    "Project manager with 8+ years of experience delivering cross-functional initiatives across operational, client-facing and transformation environments. Known for improving delivery consistency, aligning stakeholders and turning complex requirements into practical execution plans.",
  roles: [
    {
      title: "Senior Project Manager",
      company: "Northbridge Infrastructure Group",
      dates: "2021 - Present",
      bullets: [
        "Led 12 concurrent delivery workstreams, improving milestone completion from 81% to 96% across a 12-month program.",
        "Coordinated stakeholders across operations, finance and vendors to reduce delivery delays by 28%.",
        "Built reporting routines that improved decision turnaround and reduced rework across the program.",
      ],
    },
    {
      title: "Project Coordinator",
      company: "Western Coast Solutions",
      dates: "2017 - 2021",
      bullets: [
        "Supported project planning for initiatives valued at more than $4.2M.",
        "Tracked timelines, risks and dependencies to keep delivery aligned with client expectations.",
        "Prepared concise status updates and action logs that improved team visibility and accountability.",
      ],
    },
  ],
  education: {
    title: "Graduate Diploma of Project Management",
    school: "Curtin University, Perth",
    detail: "Completed 2017",
  },
  skills: [
    "Stakeholder Management",
    "Budget Tracking",
    "Risk & Issue Management",
    "Project Scheduling",
    "Reporting",
    "Process Improvement",
    "Team Coordination",
    "MS Project",
  ],
};

export function ResumePreview({ variant = "classic" }: ResumePreviewProps) {
  if (variant === "modern") return <ModernResume />;
  if (variant === "minimal") return <MinimalResume />;
  return <ClassicResume />;
}

function ClassicResume() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <article className="rounded-xl border border-line bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:p-6">
        <header className="border-b-2 border-double border-navy/30 pb-2.5 text-center">
          <h2 className="font-serif text-xl font-bold leading-tight tracking-tight text-navy">
            {SAMPLE.name}
          </h2>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
            {SAMPLE.title}
          </p>
          <p className="mt-1.5 text-[10px] leading-[1.4] text-muted">
            {SAMPLE.contactParts.join("  |  ")}
          </p>
        </header>

        <section className="mt-3">
          <h3 className="text-center font-serif text-[10.5px] font-bold uppercase tracking-[0.16em] text-navy">
            Professional Summary
          </h3>
          <p className="resume-body mt-1.5 text-center">{SAMPLE.summary}</p>
        </section>

        <section className="mt-3.5">
          <h3 className="border-b border-line pb-1 text-center font-serif text-[10.5px] font-bold uppercase tracking-[0.16em] text-navy">
            Work Experience
          </h3>
          <div className="mt-2 space-y-2.5">
            {SAMPLE.roles.map((role) => (
              <div key={`${role.company}-${role.title}`}>
                <div className="flex flex-col gap-0 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-serif text-[12.5px] font-bold text-navy">
                    {role.title}, {role.company}
                  </h4>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted">
                    {role.dates}
                  </p>
                </div>
                <ul className="mt-1 space-y-0.5">
                  {role.bullets.map((bullet) => (
                    <li className="resume-body flex gap-1.5" key={bullet}>
                      <span className="text-navy/50">&middot;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-3.5 text-center">
          <h3 className="border-b border-line pb-1 font-serif text-[10.5px] font-bold uppercase tracking-[0.16em] text-navy">
            Education
          </h3>
          <div className="mt-1.5 space-y-0.5">
            <p className="resume-body font-semibold text-ink">{SAMPLE.education.title}</p>
            <p className="resume-body">
              {SAMPLE.education.school} &mdash; {SAMPLE.education.detail}
            </p>
          </div>
        </section>

        <section className="mt-3.5 text-center">
          <h3 className="border-b border-line pb-1 font-serif text-[10.5px] font-bold uppercase tracking-[0.16em] text-navy">
            Skills
          </h3>
          <p className="resume-body mt-1.5">{SAMPLE.skills.join("   •   ")}</p>
        </section>
      </article>
    </div>
  );
}

function ModernResume() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 rounded-2xl bg-teal/10 blur-lg" />
      <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_14px_32px_rgba(15,23,42,0.12)] rotate-[1.5deg]">
        <header className="bg-navy px-5 py-3.5">
          <h2 className="font-display text-lg font-extrabold leading-tight tracking-tight text-white">
            {SAMPLE.name}
          </h2>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">
            {SAMPLE.title}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-[0.36fr_0.64fr]">
          <aside className="space-y-3.5 bg-soft px-4 py-4">
            <div>
              <h3 className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-teal">
                Contact
              </h3>
              <ul className="mt-1.5 space-y-1">
                {SAMPLE.contactParts.map((part) => (
                  <li className="text-[9.5px] leading-[1.35] text-ink" key={part}>
                    {part}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-teal">
                Skills
              </h3>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {SAMPLE.skills.map((skill) => (
                  <span
                    className="rounded-md bg-white px-1.5 py-0.5 text-[9px] font-semibold text-navy shadow-sm"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-teal">
                Education
              </h3>
              <div className="mt-1.5 space-y-0.5">
                <p className="text-[9.5px] font-semibold leading-[1.35] text-ink">
                  {SAMPLE.education.title}
                </p>
                <p className="text-[9px] leading-[1.35] text-muted">{SAMPLE.education.school}</p>
                <p className="text-[9px] leading-[1.35] text-muted">{SAMPLE.education.detail}</p>
              </div>
            </div>
          </aside>

          <main className="px-4 py-4 sm:px-5">
            <section>
              <h3 className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-teal">
                Summary
              </h3>
              <p className="resume-body mt-1.5">{SAMPLE.summary}</p>
            </section>

            <section className="mt-3">
              <h3 className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-teal">
                Experience
              </h3>
              <div className="mt-1.5 space-y-2.5">
                {SAMPLE.roles.map((role) => (
                  <div className="border-l-2 border-brand/25 pl-2.5" key={`${role.company}-${role.title}`}>
                    <div className="flex flex-col gap-0 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h4 className="font-display text-[12px] font-bold leading-tight text-navy">
                          {role.title}
                        </h4>
                        <p className="text-[10px] font-semibold text-teal">{role.company}</p>
                      </div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted">
                        {role.dates}
                      </p>
                    </div>
                    <ul className="mt-1 space-y-0.5">
                      {role.bullets.map((bullet) => (
                        <li className="resume-body flex gap-1.5" key={bullet}>
                          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-brand" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </article>
    </div>
  );
}

function MinimalResume() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <article className="rounded-xl border border-line bg-white p-6 sm:p-7">
        <header>
          <h2 className="text-xl font-light leading-tight tracking-tight text-navy">
            {SAMPLE.name}
          </h2>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-teal">
            {SAMPLE.title}
          </p>
          <p className="mt-2 text-[10px] leading-[1.4] text-muted">
            {SAMPLE.contactParts.join("   /   ")}
          </p>
        </header>

        <section className="mt-4">
          <h3 className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-teal">
            Summary
          </h3>
          <p className="resume-body mt-1.5">{SAMPLE.summary}</p>
        </section>

        <section className="mt-4">
          <h3 className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-teal">
            Experience
          </h3>
          <div className="mt-1.5 space-y-3">
            {SAMPLE.roles.map((role) => (
              <div key={`${role.company}-${role.title}`}>
                <div className="flex flex-col gap-0 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-[12.5px] font-medium text-ink">{role.title}</h4>
                  <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-muted">
                    {role.dates}
                  </p>
                </div>
                <p className="text-[10.5px] text-muted">{role.company}</p>
                <ul className="mt-1 space-y-0.5">
                  {role.bullets.map((bullet) => (
                    <li className="resume-body text-ink/90" key={bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <h3 className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-teal">
            Education
          </h3>
          <div className="mt-1.5 space-y-0.5">
            <p className="resume-body font-medium text-ink">{SAMPLE.education.title}</p>
            <p className="text-[10.5px] text-muted">
              {SAMPLE.education.school} &nbsp;&mdash;&nbsp; {SAMPLE.education.detail}
            </p>
          </div>
        </section>

        <section className="mt-4">
          <h3 className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-teal">
            Skills
          </h3>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
            {SAMPLE.skills.map((skill) => (
              <span className="text-[10.5px] text-ink/90" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

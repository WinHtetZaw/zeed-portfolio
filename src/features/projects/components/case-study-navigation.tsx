const navigationItems = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Technical decisions", href: "#technical-decisions" },
  { label: "Challenges", href: "#challenges" },
  { label: "Lessons", href: "#lessons" },
];

export default function CaseStudyNavigation() {
  return (
    <nav
      aria-label="Project case study sections"
      className="sticky top-20 z-30 border-y border-white/10 bg-zinc-950/90 backdrop-blur-xl"
    >
      <div className="container-layout">
        <ul className="flex gap-6 overflow-x-auto scrollbar-none py-4 text-sm whitespace-nowrap">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-zinc-400 transition-colors hover:text-white focus-visible:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

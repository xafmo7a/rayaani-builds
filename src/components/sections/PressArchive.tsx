import { ExternalLink } from "lucide-react";

const recognitionLinks = [
  { label: "Powerlist Influential 30 Architects 2024", url: "https://design-middleeast.com/powerlist-influential-30-architects-2024-raya-ani-founder-design-director-raw-nyc-architects/" },
  { label: "Powerlist Creative 30 2023", url: "https://design-middleeast.com/powerlist-creative-30-2023-raya-ani-founder-and-design-director-raw-nyc-architects/" },
  { label: "MIT News: Forbes 50 Over 50", url: "https://architecture.mit.edu/news/raya-ani-smarchs-94-named-forbes-50-over-50" },
  { label: "Forbes 50 Over 50: EMEA 2022", url: "https://www.forbes.com/sites/maggiemcgrath/2022/01/18/50-over-50-emea-2022/" },
  { label: "Takreem Award: Environmental Development", url: "https://www.takreem.org/raya-al-ani-iraq/" },
];

const institutionalLinks = [
  { label: "AIA New York: Featured Member", url: "https://www.aiany.org/news/featured-member-raya-ani-faia-leed-ap/" },
  { label: "AIA International: FAIA Elevation", url: "https://www.aiainternational.org/news-feed/2019/2/27/jury-of-fellows-elevates-3-aia-international-region-members-to-fellowship" },
  { label: "UNESCO: Al-Nouri Mosque Competition", url: "https://www.unesco.org/en/articles/architectural-competition-reconstruction-and-rehabilitation-al-nouri-complex-mosul" },
  { label: "MIT Aga Khan Program Alumni News", url: "https://akpia.mit.edu/akpia-alumni-community-news/" },
];

const mediaLinks = [
  { label: "Fast Company: Liberland Masterplan", url: "https://www.fastcompany.com/3060800/this-self-proclaimed-micronation-has-plans-for-a-car-free-algae-powered-city" },
  { label: "Grist: Future of Cities", url: "https://grist.org/cities/stackable-neighborhoods-could-be-the-way-of-the-future-for-cities/" },
  { label: "Inhabitat: Algae-Powered Urbanism", url: "https://inhabitat.com/liberland-may-be-the-worlds-first-sovereign-nation-powered-by-algae/" },
  { label: "ME Architect: Bringing the Outside In", url: "https://www.middleeastarchitect.com/insight/bringing-the-outside-in" },
  { label: "Khaleej Times: Shaping Design Identity", url: "https://www.khaleejtimes.com/lifestyle/how-women-architects-are-shaping-the-uaes-design-identity" },
];

const LinkGroup = ({ title, links }: { title: string; links: { label: string; url: string }[] }) => (
  <div>
    <h4
      className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-4"
      style={{ color: "hsl(var(--aia-red) / 0.7)" }}
    >
      {title}
    </h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[12px] md:text-[13px] text-black/50 hover:text-black/80 transition-colors duration-200 leading-[1.5]"
          >
            <ExternalLink className="w-3 h-3 flex-shrink-0" style={{ color: "hsl(var(--aia-red) / 0.5)" }} />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const PressArchive = () => (
  <div className="px-5 md:px-10 py-8" style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}>
    <div
      className="h-px mb-6"
      style={{ background: "linear-gradient(to right, hsl(var(--aia-red)), transparent 60%)" }}
    />
    <h3
      className="text-[9px] font-semibold tracking-[0.28em] uppercase mb-6"
      style={{ color: "hsl(0 0% 45%)" }}
    >
      Indexed References & Press Archive
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <LinkGroup title="Recognition & Honors" links={recognitionLinks} />
      <LinkGroup title="Institutional & Professional" links={institutionalLinks} />
      <LinkGroup title="Media & Publications" links={mediaLinks} />
    </div>
  </div>
);

export default PressArchive;

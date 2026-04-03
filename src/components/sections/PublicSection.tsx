import SectionHero from "@/components/sections/SectionHero";
import StatsRow from "@/components/sections/StatsRow";
import TimelineGrid from "@/components/sections/TimelineGrid";
import FeatureBar from "@/components/sections/FeatureBar";
import TwoColumn from "@/components/sections/TwoColumn";
import AwardsCarousel from "@/components/sections/AwardsCarousel";
import AwardsGrid from "@/components/sections/AwardsGrid";
import MediaGrid from "@/components/sections/MediaGrid";
import PressArchive from "@/components/sections/PressArchive";

const stats = [
  { value: "128K+", label: "Global Followers" },
  { value: "2019", label: "Elevated to FAIA" },
  { value: "10+", label: "Power List Years" },
  { value: "30+", label: "Global Speaking Engagements" },
];

const credentials = [
  { year: "1984", event: "University of Baghdad", detail: "Bachelor of Architectural Engineering — Top 5 graduates, graduated with honors" },
  { year: "1992", event: "MIT — Aga Khan Scholar", detail: "SMArchS, Master of Science in Architectural Studies — Thesis Graded A (Exceptional Performance)" },
  { year: "2003", event: "NY State Registration", detail: "Licensed Architect, State of New York — License # 029503" },
  { year: "2004", event: "AIA Affiliation", detail: "American Institute of Architects — Member, AIA New York" },
  { year: "2004", event: "LEED Accreditation", detail: "LEED Accredited Professional, Member of the USGBC" },
  { year: "2019", event: "Elevated to FAIA", detail: "AIA College of Fellows — one of the highest membership honors for exceptional work and contributions to architecture and society" },
];

const awards = [
  { caption: "Forbes 50 Over 50: EMEA", year: "2022" },
  { caption: "Takreem Award — Environmental Sustainability", year: "2021" },
  { caption: "Elevated to FAIA — AIA College of Fellows", year: "2019" },
  { caption: "Middle East Women Leadership Award", year: "2018" },
  { caption: "AIA ME President — Elected by Highest Votes", year: "2017" },
  { caption: "Liberland Int'l Design — 1st Place Winner", year: "2016" },
  { caption: "Selected as Most Influential Global Figure", year: "2016" },
];

const powerList = [
  { year: "2025", title: "Power List", body: "Middle East Architect — Top Most Powerful Architects" },
  { year: "2024", title: "Power List", body: "Middle East Architect — Top Most Powerful Architects" },
  { year: "2023", title: "Power List", body: "Middle East Architect — Top Most Powerful Architects" },
  { year: "2022", title: "Power List", body: "Middle East Architect — Top Most Powerful Architects" },
  { year: "2019", title: "Power List", body: "Most Influential Architect, Middle East" },
  { year: "2018", title: "Power List", body: "Most Influential Architect, Middle East" },
  { year: "2017", title: "Power List", body: "Top Most Powerful Architects in the Middle East" },
  { year: "2016", title: "Power List", body: "Top Most Powerful — only woman in the top 20" },
];

const globalForums = [
  { year: "2024", event: "Open Innovation Forum", detail: "Keynote — Moscow, Russia. Innovation and the future of sustainable cities." },
  { year: "2024", event: "RIBA / AIA Middle East", detail: "International Women's Day \"Inspire Inclusion\" — leadership, inclusivity, and the future of the profession." },
  { year: "2024", event: "Sustainability Innovation Forum", detail: "Speaker — sustainable architecture and innovation in the built environment." },
  { year: "2022", event: "TEDx Baghdad", detail: "\"Towards a Pioneering Architecture\" — innovation and identity in contemporary design." },
  { year: "2022", event: "AIA International Conference", detail: "Keynote Speaker — architecture, the metaverse, and the future of the profession." },
  { year: "2022", event: "Global Real Estate Summit", detail: "Keynote Speaker — Barcelona, Spain. Innovation, Sustainability & Technology." },
  { year: "2020", event: "Global Real Estate Summit", detail: "Keynote Speaker — New York. A multi-disciplinary voice into future architectural design." },
  { year: "2018", event: "Leaders in Architecture MENA", detail: "Speaker — Future Living, Technology & Sustainability." },
  { year: "2017", event: "AIA ME Conference \"10,958 Days\"", detail: "Curator, strategist & speaker — the future of the architectural profession over the next 30 years." },
];

const speakingItems = [
  { caption: "TEDx Baghdad", year: "2022" },
  { caption: "AIA International Conference", year: "2022" },
  { caption: "Open Innovation Forum, Moscow", year: "2024" },
  { caption: "Embassy of Iraq, Vienna — Keynote", year: "2017" },
  { caption: "Smart Skyscraper Summit, Dubai", year: "2014" },
  { caption: "Harvard Arab Alumni Conference", year: "2016" },
];

const academicInstitutions = [
  "MIT — Teaching Assistant, Aga Khan Program (1993–94)",
  "Boston Architectural Center — Urban Design Studio (1995)",
  "Columbia University — Guest Critic (2006–2010)",
  "Catholic University of America, Washington DC",
  "Fashion Institute of Technology, New York",
  "New York School of Interior Design",
  "American University of Sharjah / Heriot Watt (2015–17)",
  "Zayed University / American University of Dubai",
];

const mediaItems = [
  { year: "2022", title: "Forbes 50 Over 50: EMEA", outlet: "Forbes Magazine" },
  { year: "2022", title: "Featured — Power List 2022", outlet: "Middle East Architect" },
  { year: "2021", title: "Influential Arab Women in Business", outlet: "Asharq Al-Awsat / Arab Media" },
  { year: "2018", title: "How Women Architects Are Shaping UAE Design", outlet: "WKND Magazine / Khaleej Times" },
  { year: "2016", title: "Liberland — Algae-Powered City Feature", outlet: "Fast Company / Inhabitat / Grist" },
  { year: "2019", title: "Featured — Dutch National Daily", outlet: "NRC Media (Netherlands)" },
  { year: "2024", title: "Live Interview — Sustainable Architecture", outlet: "BLINX / Dubai TV" },
  { year: "2024", title: "Arab-American Heritage Month Exhibition", outlet: "Los Angeles, CA" },
  { year: "2018", title: "designMENA — RAW WRAP Feature", outlet: "designMENA Magazine" },
];

const PublicSection = () => {
  return (
    <div>
      {/* Hero */}
      <SectionHero
        eyebrow="A Voice for the Profession"
        title={
          <>
            Architecture carries<br />
            <span className="italic text-foreground/60">responsibilities</span><br />
            beyond buildings
          </>
        }
        label="PUB"
        sublabel="Public Impact & Recognition"
      />

      {/* Stats */}
      <StatsRow stats={stats} />

      {/* Journey */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.6fr]"
        style={{ borderBottom: "1px solid hsl(0 0% 12%)" }}
      >
        <div className="p-5 md:p-8 md:pr-6">
          <div className="text-[9px] font-semibold tracking-[0.28em] uppercase mb-4" style={{ color: "hsl(var(--aia-red))" }}>
            Background
          </div>
          <h2 className="font-display text-[clamp(22px,3vw,36px)] font-light text-foreground leading-[1.2] mb-4">
            A Trajectory of<br /><span className="italic text-foreground/60">Grit and Excellence</span>
          </h2>
          <div
            className="aspect-square rounded-md flex items-center justify-center"
            style={{
              background: "hsl(0 0% 8%)",
              border: "1px dashed hsl(0 0% 15%)",
            }}
          >
            <span className="text-[9px] tracking-[0.12em] uppercase" style={{ color: "hsl(0 0% 25%)" }}>
              Portrait Photo
            </span>
          </div>
        </div>
        <div className="hidden md:block" style={{ background: "hsl(0 0% 12%)" }} />
        <div className="p-5 md:p-8 md:pl-6">
          <div className="text-[13px] leading-[1.9] text-foreground/50 font-normal space-y-4">
            <p>
              While her perspective was forged in the dualities of <strong className="text-foreground font-semibold">Washington, D.C. and Baghdad</strong>, Raya Ani's professional life has been defined by the pursuit of excellence across borders. She studied <strong className="text-foreground font-semibold">Architectural Engineering at the University of Baghdad (1984–1989)</strong>, graduating with top honors before the 1991 Gulf War changed everything.
            </p>
            <p>
              Driven by hope larger than fear, she left Iraq alone — working at <strong className="text-foreground font-semibold">George Kinsky Architect</strong> in Frankfurt for $100 a month while painting and selling artwork to sustain her journey. Upon arriving in the United States she accepted an unpaid internship, approaching even the simplest tasks with seriousness and gratitude.
            </p>
            <p>
              This persistence led to a scholarship through the <strong className="text-foreground font-semibold">Aga Khan Program at MIT and Harvard</strong>. At MIT (1992–1994) she completed her <strong className="text-foreground font-semibold">Master of Science in Architectural Studies (SMArchS)</strong>, extending her focus into history, theory, and criticism — disciplines that sharpened the strategic approach to architectural leadership she carries today.
            </p>
            <p>
              In <strong className="text-foreground font-semibold">2004</strong>, she became a licensed architect in the State of New York and a <strong className="text-foreground font-semibold">LEED Accredited Professional</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <TimelineGrid label="Credentials & Milestones" items={credentials} />

      {/* FAIA Feature */}
      <FeatureBar
        num="FAIA"
        title="Recognition that Advances the Profession"
        text="Raya Ani's contributions have been recognized through national and international honors reflecting leadership, professional service, and influence on the built environment — from Forbes 50 Over 50 EMEA to the Takreem Award for Environmental Development and Sustainability."
      />

      {/* Awards Carousel */}
      <AwardsCarousel label="Awards & Honors — Scroll to explore" items={awards} />

      {/* Power List Grid */}
      <AwardsGrid label="Power List — Middle East Architect" items={powerList} />

      {/* Stewardship */}
      <TwoColumn
        left={{
          tag: "Professional Stewardship",
          heading: "International Jury Leadership",
          body: (
            <>
              Raya Ani has served as <strong className="text-foreground font-semibold">Jury President for the UNESCO international competition</strong> for the reconstruction of the Al-Nouri Mosque Complex in Mosul (2020) — an initiative of global cultural and architectural significance. She also served as Jury Chair for the AIA Middle East Design Awards (2019) and on the jury panel for the Middle East Architect Awards (2019).
            </>
          ),
        }}
        right={{
          tag: "Community Initiative",
          heading: "Zukak & Mahala Initiative",
          body: (
            <>
              In 2018, she launched the <strong className="text-foreground font-semibold">Zukak & Mahala Initiative</strong>, a community empowerment program focused on rebuilding Iraqi communities and supporting local leadership through architecture and civic engagement.
            </>
          ),
        }}
      />

      {/* Global Forums */}
      <TimelineGrid label="Public Dialogue & Global Forums" items={globalForums} />

      {/* Speaking Carousel */}
      <AwardsCarousel label="Speaking Engagements — Scroll to explore" items={speakingItems} />

      {/* Academic */}
      <FeatureBar
        num="ACAD"
        title="Academic Engagement & Mentorship"
        text="Teaching Assistant at MIT (1993–94) within the Aga Khan Program. Taught at the Boston Architectural Center (1995). Guest critic at Columbia University, Catholic University of America, FIT, New York School of Interior Design, and Zayed University. Research published in The Papers, journal of the Aga Khan Program for Islamic Architecture."
      />

      {/* Academic Institutions List */}
      <div className="px-5 md:px-10 py-6" style={{ borderBottom: "1px solid hsl(0 0% 12%)" }}>
        <div
          className="h-px mb-6"
          style={{ background: "linear-gradient(to right, hsl(var(--aia-red)), transparent 60%)" }}
        />
        <h3 className="text-[9px] font-semibold tracking-[0.28em] uppercase mb-5" style={{ color: "hsl(0 0% 40%)" }}>
          Academic Institutions
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2">
          {academicInstitutions.map((inst, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 py-2.5 text-[12px] text-foreground/50 font-normal leading-[1.5]"
              style={{
                borderBottom: "1px solid hsl(0 0% 12%)",
                paddingRight: "1.5rem",
              }}
            >
              <span
                className="inline-block w-1 h-1 rounded-full flex-shrink-0 mt-[7px]"
                style={{ background: "hsl(var(--aia-red))" }}
              />
              {inst}
            </li>
          ))}
        </ul>
      </div>

      {/* Media */}
      <MediaGrid items={mediaItems} />
    </div>
  );
};

export default PublicSection;

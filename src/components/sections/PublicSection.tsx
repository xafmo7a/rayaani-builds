import SectionHero from "@/components/sections/SectionHero";
import StatsRow from "@/components/sections/StatsRow";
import FeatureBar from "@/components/sections/FeatureBar";
import TwoColumn from "@/components/sections/TwoColumn";
import ImagePanel from "@/components/sections/ImagePanel";
import PressArchive from "@/components/sections/PressArchive";
import ImageLightbox from "@/components/ui/ImageLightbox";

const stats = [
  { value: "128K+", label: "Global Followers" },
  { value: "2019", label: "Elevated to FAIA" },
  { value: "10+", label: "Power List Years" },
  { value: "30+", label: "Global Speaking Engagements" },
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
            <span className="italic text-white/60">responsibilities</span><br />
            beyond buildings
          </>
        }
        label="PUB"
        sublabel="Public Impact & Recognition"
      />

      {/* Stats */}
      <StatsRow stats={stats} />

      {/* Journey / Background */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.6fr]"
        style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
      >
        <div className="p-5 md:p-8 md:pr-6">
          <div
            className="text-[9px] font-semibold tracking-[0.28em] uppercase mb-4"
            style={{ color: "hsl(var(--aia-red))" }}
          >
            Background
          </div>
          <h2 className="font-display text-[clamp(22px,3vw,36px)] font-light text-black leading-[1.2] mb-4">
            A Trajectory of<br />
            <span className="italic text-black/50">Grit and Excellence</span>
          </h2>
          <div className="aspect-square rounded-md overflow-hidden">
            <ImageLightbox
              src="/images/portrait.png"
              alt="Raya Ani portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="hidden md:block" style={{ background: "hsl(0 0% 88%)" }} />
        <div className="p-5 md:p-8 md:pl-6">
          <div className="text-[13px] leading-[1.9] text-black/55 font-normal space-y-4">
            <p>
              While my perspective was forged in the dualities of{" "}
              <strong className="text-black font-semibold">Washington, D.C. and Baghdad</strong>,
              my professional life has been defined by the pursuit of excellence across borders. My
              connection to the U.S. capital began while my mother was completing her Master's degree
              in Fine Arts at <strong className="text-black font-semibold">Howard University</strong>{" "}
              and my father was working in the city; at only six months old, I was taken back to Iraq
              by my parents, where I was raised and eventually studied{" "}
              <strong className="text-black font-semibold">
                Architectural Engineering at the University of Baghdad (1984–1989)
              </strong>
              . Graduating with top honors, I was prepared for a career in design—but the{" "}
              <strong className="text-black font-semibold">1991 Gulf War</strong> changed everything.
            </p>
            <p>
              Driven by a <strong className="text-black font-semibold">hope larger than my fear</strong>,
              I left Iraq alone with no financial safety net. I first went to Germany, working at{" "}
              <strong className="text-black font-semibold">George Kinsky Architect</strong> in Frankfurt
              for $100 a month while painting and selling my artwork to sustain my journey. Upon arriving
              in the United States during an economic downturn, I accepted an{" "}
              <strong className="text-black font-semibold">unpaid internship</strong>, approaching even
              the simplest tasks with seriousness and gratitude.
            </p>
            <p>
              This persistence led to a scholarship through the{" "}
              <strong className="text-black font-semibold">Aga Khan Program at MIT and Harvard</strong>.
              At <strong className="text-black font-semibold">MIT (1992–1994)</strong>, I completed my{" "}
              <strong className="text-black font-semibold">
                Master of Science in Architectural Studies (SMArchS)
              </strong>
              , supporting myself as a teaching and research assistant. These years extended my focus into
              history, theory, and criticism—disciplines that sharpened the{" "}
              <strong className="text-black font-semibold">
                strategic approach to architectural leadership
              </strong>{" "}
              I carry today.
            </p>
            <p>
              In <strong className="text-black font-semibold">2004</strong>, I became a licensed
              architect in the State of New York and a{" "}
              <strong className="text-black font-semibold">LEED Accredited Professional</strong>.
              Those years built the foundation for the public impact that followed.
            </p>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <ImagePanel
        src="/images/public/credentials.png"
        alt="Credentials & Milestones — AIA, LEED, NY Registration, MIT, University of Baghdad"
        label="Credentials & Milestones"
      />

      {/* FAIA Feature */}
      <FeatureBar
        num="FAIA"
        title="Recognition that Advances the Profession"
        text="Raya Ani's contributions have been recognized through national and international honors reflecting leadership, professional service, and influence on the built environment — from Forbes 50 Over 50 EMEA to the Takreem Award for Environmental Development and Sustainability."
      />

      {/* Recognition & Power List */}
      <ImagePanel
        src="/images/public/recognition.png"
        alt="Recognition — Power Lists, Forbes 50 Over 50, FAIA Fellowship, UNESCO Jury President"
        label="Recognition & Power List"
      />

      {/* Awards */}
      <ImagePanel
        src="/images/public/awards.png"
        alt="Awards & Honors — Takreem, IDA Gold Winner, RTF Awards, AIA Merit Awards"
        label="Awards & Honors"
      />

      {/* Stewardship */}
      <TwoColumn
        left={{
          tag: "Professional Stewardship",
          heading: "International Jury Leadership",
          body: (
            <>
              Raya Ani has served as{" "}
              <strong className="text-black font-semibold">
                Jury President for the UNESCO international competition
              </strong>{" "}
              for the reconstruction of the Al-Nouri Mosque Complex in Mosul (2020) — an initiative of
              global cultural and architectural significance. She also served as Jury Chair for the AIA
              Middle East Design Awards (2019) and on the jury panel for the Middle East Architect Awards
              (2019).
            </>
          ),
        }}
        right={{
          tag: "Community Initiative",
          heading: "Zukak & Mahala Initiative",
          body: (
            <>
              In 2018, she launched the{" "}
              <strong className="text-black font-semibold">Zukak & Mahala Initiative</strong>, a
              community empowerment program focused on rebuilding Iraqi communities and supporting local
              leadership through architecture and civic engagement.
            </>
          ),
        }}
      />

      {/* Speaking Engagements */}
      <ImagePanel
        src="/images/public/speaking.png"
        alt="Speaking Engagements — TEDx Baghdad, AIA Conference, Global Real Estate Summit, and more"
        label="Public Dialogue & Speaking Engagements"
      />

      {/* Academic */}
      <FeatureBar
        num="ACAD"
        title="Academic Engagement & Mentorship"
        text="Teaching Assistant at MIT (1993–94) within the Aga Khan Program. Taught at the Boston Architectural Center (1995). Guest critic at Columbia University, Catholic University of America, FIT, New York School of Interior Design, and Zayed University. Research published in The Papers, journal of the Aga Khan Program for Islamic Architecture."
      />

      {/* Academic Institutions */}
      <ImagePanel
        src="/images/public/academic.png"
        alt="Academic Experience — MIT, Columbia University, FIT, AUS, Zayed University"
        label="Academic Institutions"
      />

      {/* Media & Publications */}
      <ImagePanel
        src="/images/public/media.png"
        alt="Media Coverage — WKND, Top Architects, designMENA, Emirates Magazine, Inhabitat"
        label="Publications & Media Coverage"
      />

      {/* TV Interviews */}
      <ImagePanel
        src="/images/public/interviews.png"
        alt="TV Interviews — Al Sharqiya, NBC, MSNBC, Arab TV, Sky News Arabia, Abu Dhabi TV"
        label="Broadcast Interviews"
      />

      {/* Press Archive */}
      <PressArchive />
    </div>
  );
};

export default PublicSection;

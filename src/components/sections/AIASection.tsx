import SectionHero from "@/components/sections/SectionHero";
import StatsRow from "@/components/sections/StatsRow";
import FeatureBar from "@/components/sections/FeatureBar";
import TwoColumn from "@/components/sections/TwoColumn";
import ImageLightbox from "@/components/ui/ImageLightbox";

const stats = [
  { value: "FAIA", label: "Fellow, AIA" },
  { value: "2016", label: "AIA ME President" },
  { value: "30+", label: "Years of Practice" },
  { value: "3", label: "Global Offices" },
];

const tracks = [
  {
    num: "01",
    name: "Foundation",
    pillar: "Trust",
    points: [
      "Ground the profession in clear standards and ethical conduct.",
      "Govern through transparent leadership and accountability.",
      "Enable equitable access to participation and opportunity.",
      "Protect the profession's responsibility to the public.",
    ],
  },
  {
    num: "02",
    name: "Structure",
    pillar: "Practice",
    points: [
      "Connect AIA National, state, and local components.",
      "Coordinate communication to reduce fragmentation.",
      "Support small and mid-sized practices.",
      "Advance shared capability through knowledge systems.",
    ],
  },
  {
    num: "03",
    name: "Envelope",
    pillar: "Voice",
    points: [
      "Lead on public policy and legislative priorities.",
      "Represent the value of architects in housing and climate.",
      "Partner with government and AEC industry stakeholders.",
      "Advance policy frameworks that expand access to work.",
    ],
  },
  {
    num: "04",
    name: "Future Systems",
    pillar: "Intelligence",
    points: [
      "Advance digital fluency across the profession.",
      "Integrate AI and emerging technologies into practice.",
      "Apply regenerative and high-performance standards.",
      "Evolve practice and delivery models for the new era.",
    ],
  },
];

const AIASection = () => {
  return (
    <div>
      {/* Hero */}
      <SectionHero
        eyebrow="American Institute of Architects"
        title={
          <>
            The Architecture of{" "}
            <span className="italic text-white/60">Empowerment</span>
          </>
        }
        label="AIA"
        sublabel="Presidential Candidate"
      />

      {/* Stats */}
      <StatsRow stats={stats} />

      {/* The Why */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.6fr]"
        style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
      >
        <div className="p-5 md:p-8 md:pr-6">
          <div
            className="text-[9px] font-semibold tracking-[0.28em] uppercase mb-4"
            style={{ color: "hsl(var(--aia-red))" }}
          >
            The Why
          </div>
          <h2 className="font-display text-[clamp(22px,3vw,36px)] font-light text-black leading-[1.2] mb-4">
            Architects at the Center of{" "}
            <span className="italic text-black/50">Public Service</span>
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
            <p className="italic text-black/70 text-[14px] leading-[1.8]">
              "There is a story behind my accent—one shaped by resilience and
              defined by leadership. I was born in Washington, D.C., but my
              perspective was forged growing up in Baghdad during the Gulf War.
              Living through war changes you on a cellular level. It teaches you
              what it means to feel powerless—and why{" "}
              <strong className="text-black font-semibold">
                invisibility is dangerous for Architects
              </strong>
              ."
            </p>
            <p>
              Today I see our profession facing its own challenge of
              invisibility. Architects carry immense responsibility, yet too
              often we are absent from the decisions shaping the built
              environment. I am running for AIA National President because this
              moment calls for leaders who understand resilience and know how to
              turn challenges into progress.
            </p>
          </div>
        </div>
      </div>

      {/* 4-Track System */}
      <FeatureBar
        num="4TS"
        title="The 4-Track Architectural Leadership System"
        text="A structured framework for advancing the profession through trust, practice, voice, and intelligence — four interconnected tracks that address the challenges and opportunities facing architecture today."
      />

      <div
        className="px-5 md:px-10 py-8"
        style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tracks.map((track) => (
            <div
              key={track.num}
              className="rounded-xl p-5 md:p-6"
              style={{
                background: "hsl(0 0% 96%)",
                border: "1px solid hsl(0 0% 88%)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-bold tracking-[0.15em] px-2.5 py-1 rounded-md"
                  style={{
                    background: "hsl(var(--aia-red) / 0.12)",
                    color: "hsl(var(--aia-red))",
                    border: "1px solid hsl(var(--aia-red) / 0.15)",
                  }}
                >
                  Track {track.num}
                </span>
                <span
                  className="text-[9px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: "hsl(0 0% 50%)" }}
                >
                  Pillar: {track.pillar}
                </span>
              </div>
              <h3 className="text-[16px] md:text-[18px] font-bold text-black/85 mb-3 tracking-[0.02em]">
                {track.name}
              </h3>
              <ul className="space-y-2">
                {track.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[12px] md:text-[13px] text-black/55 leading-[1.6]"
                  >
                    <span
                      className="inline-block w-1 h-1 rounded-full flex-shrink-0 mt-[7px]"
                      style={{ background: "hsl(var(--aia-red))" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Dimensions */}
      <TwoColumn
        left={{
          tag: "Visionary Leadership",
          heading: "Systems of the Future",
          body: (
            <>
              Integrating innovation with regenerative urban models. This
              includes delivering NYC's first public green school (P.S. 59) and
              the Liberland master plan, proposing a regenerative urban model for
              a 7 km² territory.
            </>
          ),
        }}
        right={{
          tag: "Institutional Leadership",
          heading: "A Global AIA Member",
          body: (
            <>
              First woman elected to the AIA Middle East Presidency
              (2016–2018). Established country representation in Jordan and
              Iraq. Served as Curator of the AIA International Conference
              "10,958 Days."
            </>
          ),
        }}
      />
    </div>
  );
};

export default AIASection;

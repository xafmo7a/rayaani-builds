const Ticker = () => {
  const messages = [
    "🏛️ Architects shaping the future of public service",
    "✦ Vote Raya Ani for AIA President Elect",
    "🌍 Building bridges between cultures through architecture",
    "✦ Leadership · Vision · Service",
    "🏛️ Architects at Public Service",
  ];

  const repeatedMessages = [...messages, ...messages];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] overflow-hidden py-2"
      style={{
        background: "rgba(192,57,43,0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        className="flex gap-16 whitespace-nowrap w-max"
        style={{
          animation: "tickerScroll 30s linear infinite",
        }}
      >
        {repeatedMessages.map((msg, i) => (
          <span
            key={i}
            className="text-[13px] font-semibold tracking-[0.08em] text-foreground/90"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

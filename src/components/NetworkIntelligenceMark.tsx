import { MouseEvent, useMemo, useState } from "react";

const divisions = [
  {
    label: "Infrastructure",
    description: "Physical assets, development, construction, and operating environments.",
    orbit: "h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem]",
    duration: 28,
    direction: "normal",
    angle: 0,
  },
  {
    label: "Capital",
    description: "Investment strategy, structured funding, and long-term enterprise value.",
    orbit: "h-[13rem] w-[13rem] sm:h-[18rem] sm:w-[18rem]",
    duration: 34,
    direction: "reverse",
    angle: 72,
  },
  {
    label: "Talent",
    description: "People systems, skills development, leadership, and workforce capacity.",
    orbit: "h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem]",
    duration: 31,
    direction: "reverse",
    angle: 144,
  },
  {
    label: "Digital",
    description: "Software products, media systems, platforms, and digital operations.",
    orbit: "h-[13rem] w-[13rem] sm:h-[18rem] sm:w-[18rem]",
    duration: 26,
    direction: "normal",
    angle: 216,
  },
  {
    label: "Intelligence",
    description: "NOVA as the decision layer connecting data, workflows, and execution.",
    orbit: "h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem]",
    duration: 38,
    direction: "normal",
    angle: 288,
  },
];

const NetworkIntelligenceMark = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const activeDivision = divisions[activeIndex];

  const orbitRings = useMemo(() => ["h-[9rem] w-[9rem]", "h-[14rem] w-[14rem]", "h-[18rem] w-[18rem] sm:h-[23rem] sm:w-[23rem]"], []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <div
      className="network-panel premium-card group relative min-h-[29rem] overflow-hidden p-4 sm:min-h-[34rem] sm:p-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="relative z-10 flex h-full min-h-[26rem] items-center justify-center sm:min-h-[31rem]"
        style={{
          transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 180ms ease-out",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {orbitRings.map((ring) => (
            <span key={ring} className={`absolute rounded-full border border-primary/15 ${ring}`} />
          ))}
          <span className="absolute h-[20rem] w-[20rem] rounded-full bg-accent/5 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {divisions.map((division, index) => (
            <div
              key={division.label}
              className={`orbit-shell absolute rounded-full ${division.orbit}`}
              style={{
                animationDuration: `${division.duration}s`,
                animationDirection: division.direction,
                animationDelay: `-${(division.duration * division.angle) / 360}s`,
              }}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`orbit-body absolute left-1/2 top-0 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-semibold uppercase shadow-2xl backdrop-blur-xl transition sm:text-xs ${
                  activeIndex === index
                    ? "border-primary/70 bg-primary text-primary-foreground"
                    : "border-white/10 bg-slate-950/75 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
                style={{
                  letterSpacing: "0.08em",
                  animationDuration: `${division.duration}s`,
                  animationDirection: division.direction,
                  animationDelay: `-${(division.duration * division.angle) / 360}s`,
                }}
                aria-pressed={activeIndex === index}
              >
                <span className="h-2 w-2 rounded-full bg-current shadow-[0_0_18px_currentColor]" />
                {division.label}
              </button>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-primary/30 bg-slate-950/80 p-4 text-center shadow-2xl backdrop-blur-xl sm:h-36 sm:w-36">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 sm:h-14 sm:w-14">
            <img src="/media/ugenesis-network-logo.png" alt="" className="h-8 w-8 object-contain sm:h-10 sm:w-10" />
          </div>
          <p className="text-[9px] font-semibold uppercase text-primary sm:text-[10px]" style={{ letterSpacing: "0.08em" }}>
            UGENESIS Core
          </p>
          <h3 className="mt-1 text-base font-semibold leading-tight text-foreground sm:text-lg">One core</h3>
        </div>

        <div className="absolute bottom-2 left-2 right-2 z-30 rounded-xl border border-white/10 bg-slate-950/80 p-4 text-center shadow-2xl backdrop-blur-xl sm:bottom-4 sm:left-6 sm:right-6">
          <p className="text-xs font-semibold uppercase text-primary" style={{ letterSpacing: "0.08em" }}>
            {activeDivision.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeDivision.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NetworkIntelligenceMark;

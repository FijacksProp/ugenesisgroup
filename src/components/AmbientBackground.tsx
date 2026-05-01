import ParticleNetwork from "./ParticleNetwork";

const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 ambient-surface" />
    <ParticleNetwork />
    <div className="absolute inset-0 ambient-grid opacity-40" />
    <div className="ambient-orb ambient-orb-one" />
    <div className="ambient-orb ambient-orb-two" />
    <div className="ambient-orb ambient-orb-three" />
    <div className="ambient-line ambient-line-one" />
    <div className="ambient-line ambient-line-two" />
  </div>
);

export default AmbientBackground;

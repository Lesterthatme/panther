interface PeopleBehindProps {
  eyebrow: string;
  heading: string;
  body: string;
}

export default function PeopleBehind({
  eyebrow,
  heading,
  body,
}: PeopleBehindProps) {
  return (
    <section className="bg-[#0a2e2e] h-100 hidden">
      <div className="xl:px-[370px]">
        <p className="text-xs tracking-widest uppercase text-white/60 mb-2">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-serif text-white mb-4 leading-snug">
          {heading}
        </h2>
        <p className="text-sm text-white/70 leading-relaxed mb-6">{body}</p>
      </div>
    </section>
  );
}

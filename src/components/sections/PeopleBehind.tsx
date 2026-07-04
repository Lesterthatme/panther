interface PeopleBehindProps {
  eyebrow: string;
  heading: string;
  body: string;
  imageSrc: string;
}

export default function PeopleBehind({
  eyebrow,
  heading,
  body,
  imageSrc,
}: PeopleBehindProps) {
  return (
    <section className="bg-[#0a2e2e] px-6 py-10">
      <div className="xl:px-[370px]">
        <p className="text-xs tracking-widest uppercase text-white/60 mb-2">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-serif text-white mb-4 leading-snug">
          {heading}
        </h2>
        <p className="text-sm text-white/70 leading-relaxed mb-6">{body}</p>

        <img
          src={imageSrc}
          alt="Team hands together"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

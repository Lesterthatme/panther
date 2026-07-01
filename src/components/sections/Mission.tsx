interface MissionProps{
    eyebrow: string;
    heading: string;
    body: string;
    imageSrc: string;
}

export default function Mission({ eyebrow, heading, body, imageSrc }: MissionProps){
    return (
    <section className="bg-white px-6 py-10 flex items-center gap-6">
      <div className="w-1/2">
        <img
          src={imageSrc}
          alt="Doctor holding a tablet"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-1/2">
        <p className="text-xs tracking-widest uppercase text-[#215E61] mb-2">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-serif text-[#0a2e2e] mb-3">
          {heading}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {body}
        </p>
      </div>
    </section>
  );
}
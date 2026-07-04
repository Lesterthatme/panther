interface MissionProps {
  eyebrow: string;
  heading: string;
  body: string;
  imageSrc: string;
}

export default function Mission({
  eyebrow,
  heading,
  body,
  imageSrc,
}: MissionProps) {
  return (
    <section className="bg-white xl:py-24 flex items-center">
      <div className="w-full h-full gap-16 flex px-6 xl:px-[370px]">
        <div className="w-1/2">
          <img
            src={imageSrc}
            alt="Doctor holding a tablet"
            className="w-full aspect-square object-cover rounded-2xl"
          />
        </div>

          <div className="w-1/2 ">
            <div className="h-full flex flex-col justify-center">
              <p className="text-md tracking-widest uppercase text-[#215E61] mb-8">
                {eyebrow}
              </p>
              <h2 className="text-6xl font-extrabold font-serif text-[#0a2e2e] mb-8">
                {heading}
              </h2>
              <p className="text-xl font-bold text-black leading-relaxed">{body}</p>
            </div>
          </div>
      </div>
    </section>
  );
}

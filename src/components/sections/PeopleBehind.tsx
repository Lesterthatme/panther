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
    <section className="bg-[#0a2e2e] h-[570px] md:h-160 px-6">
      <div className="pt-16 pb-45 md:pt-28 md:pb-87.5 max-w-285 mx-auto">
        <p className="text-xs tracking-widest font-semibold font-serif uppercase text-white/60 mb-8">
          {eyebrow}
        </p>
        <h2 className="text-[36px] font-bold font-serif text-white mb-5 leading-none max-w-125
                      md:text-[60px] ">
          {heading}
        </h2>
        <p className="text-[18px] font-normal text-white mb-6 max-w-[768px]">{body}</p>
      </div>
    </section>
  );
}

import imageSrc from "../../../public/images/hero-doctor.png";

interface MissionProps {
  eyebrow: string;
  heading: string;
  body: string;
}

export default function Mission({ eyebrow, heading, body }: MissionProps) {
  return (
    <section className="bg-white">
      <div className="flex flex-col px-6 py-16 space-y-6 w-full max-w-285 mx-auto h-full
                    md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt="Doctor holding a tablet"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <div className="h-full flex flex-col justify-center py-2">
            <p className="text-md tracking-widest uppercase text-[#333333] mb-3 font-serif">
              {eyebrow}
            </p>
            <h2 className="text-[40px] font-extrabold font-serif text-[#333333] mb-0 py-0">
              {heading}
            </h2>
            <p className="text-[20px] font-normal text-black ">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

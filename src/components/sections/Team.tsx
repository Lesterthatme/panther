import TeamCard from "../ui/TeamCard";
import { teamMembers } from "../../data/team";
import imageSrc from "../../../public/images/team-hands.png";

export default function Team() {
  return (
    <>
      <div className="max-w-6xl mx-auto -mt-50 px-6 relative z-10">
        <img
          src={imageSrc}
          alt="Team hands together"
          className="w-full rounded-3xl object-cover max-w-285 mx-auto"
        />
      </div>
      <section className="bg-white">
        <div className="flex flex-col py-28 px-6 max-w-285 mx-auto">
          <h2 className="text-[40px] font-serif text-[#333333] text-center mb-16">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-2 md:space-x-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                photo={member.photo}
                desc_1={member.desc_1}
                desc_2={member.desc_2}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

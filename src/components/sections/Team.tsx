import TeamCard from "../ui/TeamCard";
import { teamMembers } from "../../data/team";
import imageSrc from "../../../public/images/team-hands.png";

export default function Team() {
  return (
    <section className="bg-white">
      <div className="hidden">
        <img
          src={imageSrc}
          alt="Team hands together"
          className="object-cover"
        />
      </div>

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
  );
}

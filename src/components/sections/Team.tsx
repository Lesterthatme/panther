import TeamCard from "../ui/TeamCard";
import {teamMembers } from "../../data/team";

export default function Team(){
    return (
        <section className="bg-white px-6 py-10 text-center">
            <h2 className="text-2xl font-serif text-[#0a2e2e] mb-8">
                Meet Our Team
            </h2>
            <div className="grid grid-cols-2 gap-6">
                {
                    teamMembers.map((member) => 
                        <TeamCard key={member.name} name={member.name} role={member.role} photo={member.photo} desc={member.desc}/>
                    )
                }
            </div>
        </section>
    );
}
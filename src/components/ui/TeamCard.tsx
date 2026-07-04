interface TeamCardProps{
    name: string;
    role: string;
    photo: string;
    desc_1: string;
    desc_2: string;
}

export default function TeamCard({name, role, photo, desc_1, desc_2}: TeamCardProps){
    return(
        <div className="flex flex-col items-center text-center">
            <img src={photo} alt={name} className="w-[303px] h-[335px] object-cover rounded-2xl mb-8" />
            <p className="font-semibold pb-3 text-[28px] text-[#333333]">{name}</p>
            <p className="text-[23px] text-[#333333] pb-4">{role}</p>
            <div className="space-y-3.25">
                <p className="text-[14.4px] text-[#333333]">{desc_1}</p>
                <p className="text-[14.4px] text-[#333333]">{desc_2}</p>
            </div>
        </div>
    );
}
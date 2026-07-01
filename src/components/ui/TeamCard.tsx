interface TeamCardProps{
    name: string;
    role: string;
    photo: string;
    desc: string;
}

export default function TeamCard({name, role, photo, desc}: TeamCardProps){
    return(
        <div className="flex flex-col items-center text-center">
            <img src={photo} alt={name} className="w-20 h-20 rounded-full object-cover mb-3" />
            <p className="font-semibold text-[#0a2e2e] text-sm">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
            <p className="text-xs text-gray-600 mx-10 px-10">{desc}</p>
        </div>
    );
}
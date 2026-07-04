import logo from "../../assets/image.png";

interface HeaderProps {
  tagline: string;
}

export default function Header({ tagline }: HeaderProps) {
  return (
    <header className="flex items-center bg-[#0a2e2e] h-[387px] w-full">
      <div className="flex items-center justify-between w-full xl:px-[370px]">
        <div className="text-white">
          <img src={logo} alt="company_logo" className="h-50" />
        </div>
        <p className="text-white text-2xl tracking-widest uppercase">
          {tagline}
        </p>
      </div>
    </header>
  );
}

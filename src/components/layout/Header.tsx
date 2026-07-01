import logo from "../../assets/logo.svg";

interface HeaderProps {
  tagline: string;
}

export default function Header({ tagline }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-[#215E61] to-[#0a2e2e] px-6 py-4 flex items-center justify-around">
      <div className="text-white">
        <img src={logo} alt="company_logo" className="h-[16rem] " />
      </div>
      <p className="text-white text-2xl tracking-widest uppercase">{tagline}</p>
    </header>
  );
}

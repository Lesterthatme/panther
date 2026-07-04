import logo from "../../assets/image.png";

interface HeaderProps {
  tagline: string;
}

export default function Header({ tagline }: HeaderProps) {
  return (
    <header className="bg-[#0a2e2e] h-96.75 w-full">
      <div className="max-w-285 mx-auto h-full px-6 lg:px-14">
        <div
          className="flex flex-col justify-center items-center 
        md:flex-row md:justify-between h-full"
        >
          <div className="text-white">
            <img src={logo} alt="company_logo" className="h-40" />
          </div>
          <p className="text-white text-3xl text-center leading-10 md:text-end">
            {tagline}
          </p>
        </div>
      </div>
    </header>
  );
}

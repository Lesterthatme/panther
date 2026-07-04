import logo from "../../assets/logoFooter.png";

interface FooterProps {
  aboutText: string;
  heading: string;
  body: string;
  bottomText: string;
}

export default function Footer({
  aboutText,
  heading,
  body,
  bottomText,
}: FooterProps) {
  return (
    <footer className="bg-white">
      <div className=" mx-auto h-full lg:px-14">
        <div
          className="bg-black flex flex-col rounded-tl-xl rounded-tr-xl px-6 py-16 gap-8 md:flex-row 
          lg:items-center lg:justify-between lg:pe-25
        "
        >
          <div className="flex flex-col justify-center items-center ">
            <img
              src={logo}
              alt="Company Logo"
              className="object-contain h-65 w-auto mb-6"
            />
            <p className="text-white text-center text-md ">{aboutText}</p>
          </div>
          <div className="flex flex-col justify-center items-center md:mt-17 w-full">
            <h3 className="mb-2 flex flex-row justify-center w-full text-center text-white font-serif font-medium text-3xl 
                          md:text-5xl md:text-right md:justify-end">
              {heading}
            </h3>
            <p className="text-white  text-md mb-3.5 text-center 
                          md:text-right ">
              {body}
            </p>
          </div>
        </div>
        <div className="bg-neutral-900 text-center py-8">
          <p className="text-white text-md font-medium">{bottomText}</p>
        </div>
      </div>
    </footer>
  );
}

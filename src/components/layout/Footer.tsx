interface FooterProps {
  logoText: string;
  aboutText: string;
  heading: string;
  body: string;
  bottomText: string;
}

export default function Footer({
  logoText,
  aboutText,
  heading,
  body,
  bottomText,
}: FooterProps) {
  return (
    <footer className="bg-black px-6 py-8">
      <div className="flex gap-8">
        <div className="w-1/2">
          <p className="text-white text-sm tracking-widest uppercase mb-3">
            {logoText}
          </p>
          <p className="text-white/60 text-xs leading-relaxed">{aboutText}</p>
        </div>

        <div className="w-1/2">
          <h3 className="text-white font-serif text-lg mb-2">{heading}</h3>
          <p className="text-white/60 text-xs leading-relaxed">{body}</p>
        </div>
      </div>

      <div className="border-t border-white/10 mt-6 pt-4 text-center">
        <p className="text-white/50 text-xs">{bottomText}</p>
      </div>
    </footer>
  );
}

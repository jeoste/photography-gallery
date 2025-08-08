import FooterNav from "./footer-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Footer = () => {
  return (
    <div className="flex flex-col items-center lg:items-start p-16 pb-12 gap-8 lg:gap-16 rounded-xl font-light relative flex-1 bg-primary text-white dark:text-black">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* AVATAR  */}
        <Avatar className="size-[60px]">
          <AvatarImage src="https://jeoste.github.io/assets/profile.jpg" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>

        {/* NAME  */}
        <div className="flex flex-col items-center lg:items-start gap-[2px]">
          <h1 className="text-2xl">Jeoffrey</h1>
          <p className="text-sm opacity-60">Data Consultant & Photographer Enthusiast</p>
        </div>
      </div>
      <div className="grid lg:w-full grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-14">
        <FooterNav
          title="Pages"
          links={[
            { title: "Home", href: "/" },
            { title: "Travel", href: "/travel" },
            { title: "Discover", href: "/discover" },
            { title: "Blog", href: "/blog" },
            { title: "About", href: "/about" },
          ]}
        />
        <FooterNav
          title="CMS"
          links={[{ title: "Dashboard", href: "/dashboard" }]}
        />
        <FooterNav
          title="Utility"
          links={[{ title: "Screensaver", href: "/screensaver" }]}
        />
      </div>

      {/* Attribution */}
      <div className="text-xs md:text-sm text-center md:text-left">
        <p>
          <span className="opacity-60">© Design by </span>
          <a
            href="https://templates.gola.io/template/hanssen"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Pawel Gola
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

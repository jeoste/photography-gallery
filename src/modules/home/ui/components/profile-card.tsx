// External dependencies
import Link from "next/link";

// Internal dependencies - UI Components
import ContactCard from "./contact-card";
import { PiArrowUpRight } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 items-stretch">
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2">
        <Link
          href="/about"
          className="flex flex-col justify-between gap-6 p-6 lg:p-10 xl:gap-0 bg-muted hover:bg-muted-hover transition-all duration-150 ease-[cubic-bezier(0.22, 1, 0.36, 1)] rounded-xl font-light relative group h-full"
        >
          <div className="flex gap-4 items-center">
            {/* AVATAR  */}
            <Avatar className="size-[60px]">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/11783612?v=4"
                alt="Avatar"
              />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>

            {/* NAME  */}
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-lg">jeoste</h1>
              <p className="text-sm text-text-muted">Data Consultant & Photographer Enthusiast</p>
            </div>
          </div>

          <div className="lg:mt-4 xl:mt-0">
            <p className="text-text-muted text-[15px]">
              I&apos;m Jeoffrey Stéphan (jeoste), a data consultant and a passionate photographer. Catching the moment more than the picture is what I like.
            </p>
          </div>

          <div className="absolute top-8 right-8 opacity-0 group-hover:top-6 group-hover:right-6 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <PiArrowUpRight size={18} />
          </div>
        </Link>
      </div>

      <div className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col justify-between gap-3">
        <ContactCard
          title="Instagram"
          href="https://instagram.com/jepeuli_28"
        />

        <ContactCard title="GitHub" href="https://github.com/jeoste" />

        <ContactCard
          title="Website"
          href="https://jeoste.github.io/"
        />

        <ContactCard
          title="Contact me"
          href="mailto:jeoffrey.stephan@gmail.com"
          className="bg-primary text-white hover:text-black dark:text-black dark:hover:text-white"
        />
      </div>
    </div>
  );
};

export default ProfileCard;

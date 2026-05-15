import { HeroSectionHeading, HeroSectionSubHeading, LinkedInProfile } from "@/lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";
import { MyWorkBtn } from "./ui/my-work-btn";
import { LetsConnectBtn } from "./ui/lets-connect-btn";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div id="Hero" className="z-[2] flex h-scree w-full justify-center items-center">
      <MaxWidthWrapper>
        <div className="mt-40 md:mt-52 mb-32">
          <p
            dangerouslySetInnerHTML={{ __html: HeroSectionHeading }}
            className="text-myPalette9 dark:text-myPalette1 text-5xl md:text-7xl font-semibold text-center font-myMainFont tracking-tight transition-colors duration-300"
          />
          <p className="text-myPalette9 dark:text-myPalette4 text-base md:text-lg font-medium text-center font-myMainFont my-10 transition-colors duration-300">
            {HeroSectionSubHeading}
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <Link target="_blank" to={LinkedInProfile}>
              <LetsConnectBtn />
            </Link>
            <a href="/#Work">
              <MyWorkBtn />
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;

import Link from "next/link"; // Links
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiBehanceLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-7 text-lg">
      <Link href={"https://www.linkedin.com/in/chamilsachintha96/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={"https://github.com/ChamilSachintha"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://www.behance.net/chamilsachintha96"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      {/* <Link href={""} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </Link> */}
      <Link href={"https://www.instagram.com/chamil_sachintha/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.facebook.com/chamil.sachintha/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;

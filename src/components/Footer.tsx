import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="w-full h-full flex flex-col gap-5 items-center">
        <p className="text-center font-bold">Desarrollo web 3d</p>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/ronald-santamaria-pizarro/"
              target="_blanck"
            >
              <FaLinkedin />
            </a>
          </span>
          <span className="bannerIcon">
            <FaFacebook />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

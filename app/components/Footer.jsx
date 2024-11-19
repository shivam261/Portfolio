import { FaXtwitter, FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="mb-8 mt-20 ">
      <div className=" flex items-center justify-center gap-8 text-white">
        <a
          href="https://leetcode.com/u/shivam1705of/"
          targer="_blank"
          rel="noopener noreferrer"
        >
          <FaCode fontSize={25} className="opacity-50 hover:opacity-80" />
        </a>
        <a
          href="https://github.com/shivam261"
          targer="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub fontSize={25} className="opacity-50 hover:opacity-80" />
        </a>
        <a
          href="https://www.linkedin.com/in/iamlio/"
          targer="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin fontSize={25} className="opacity-50 hover:opacity-80" />
        </a>
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-slate-700">
        &copy;compileTab. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

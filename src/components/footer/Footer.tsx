import { IoDiamond } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="w-full compBackColor flex justify-center items-center text-white mt-16">
      <div className="templateWidth w-full py-3 px-5">
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-start items-start gap-2">
            <Link to={"/"}>
              <strong className="text-2xl flex justify-center items-center gap-2">
                <IoDiamond /> Zylo
              </strong>
            </Link>
            <p>tüm hakları saklıdır</p>
          </div>

          <div className="flex flex-col justify-start items-center gap-4">
            <div className="border-b border-white">
              <strong>Takipte Kal!</strong>
            </div>
            <div>
              <a href="https://github.com/tekbasmucahit6">
                <FaGithub />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/mucahit-tekbas/">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center gap-4">
            <div className="border-b border-white">
              <strong>Hızlı Gezinme</strong>
            </div>
            <div>
              <Link to={"/"}>
                <p>Anasayfa</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

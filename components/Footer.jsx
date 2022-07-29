import Link from "next/link";
import React from "react";
import useData from "../hooks/useData";
import Social from "./Icons/Social";
import InstallOn from "./Icons/InstallOn";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { footer, social, download } = useData();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col m-4 lg:m-20 flex-wrap" id="footer">
      <div className="mx-auto">
        <Link href="/">
          <img src={footer.image} alt="LevelBoxGames" />
        </Link>
      </div>
      <div className="flex flex-wrap sm:justify-center lg:justify-between mt-4">
        <Social social={social} />
        <InstallOn download={download} additionalClass="my-12 mx-auto" />
      </div>
      <hr className="border-2 bg-gray-500 dark:text-white w-4/5 m-auto mt-3" />

      <div className="flex flex-wrap lg:flex-col justify-between text-gray-500 dark:text-white items-start my-4 lg:mx-20">
        <div className="flex flex-col lg:flex-row lg:mb-6 lg:mx-auto">
          {footer.right.map((element, i) => {
            return (
              <a className="mx-3" key={i} href={element.link}>
                {t(element.title)}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col">
          {footer.left.map((element, i) => {
            return (
              <a href={element.link} key={i} className="m-1">
                {t(element.title)}
              </a>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-500 dark:text-white">
          {t("designed_by")}
          <a href={footer.designedBy} className="text-gray-500 dark:text-white">
            Dtory
          </a>
          <br /> {t(footer.copyright)}
        </p>
      </div>
    </div>
  );
};

export default Footer;

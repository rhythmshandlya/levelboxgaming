import React from "react";
import useOther from "../hooks/useOthers";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function isImage(str) {
  return str.startsWith("__IMG__");
}
function isVideo(str) {
  return str.startsWith("__VDO__");
}
function isList(str) {
  return str.startsWith("__LIS__");
}

const OtherPage = () => {
  const { t } = useTranslation();
  const allData = useOther();
  const router = useRouter();
  const { page } = router.query;
  const data = allData[page];

  if (!data)
    return (
      <>
        <div className="text-center lg:m-40">
          <h1 className="text-3xl lg:m-20 my-10">{t("not_found")}</h1>
        </div>
      </>
    );

  return (
    <>
      {data?.heroImage && (
        <img
          className="w-full h-[500px] object-cover"
          src={data?.heroImageLink}
        ></img>
      )}
      <div className="lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]">
        {data?.allowHeader && (
          <div className="flex justify-between cursor-pointer">
            <a className="flex hover:text-[#DC143C] align-middle">
              <span className="mx-3"> &lt;</span>
              <span className="">{t(data?.backText)}</span>
            </a>
            <a href={data?.alertLink} className="text-[#DC143C]">
              {t(data?.alertText)}
            </a>
          </div>
        )}
        <h1 className="text-center text-3xl lg:m-20 my-10">{t(data?.title)}</h1>
        {data?.para?.map((element, index) => {
          if (isVideo(element)) {
            const link = element.substring(7);
            console.log(link);
            return (
              <div className="container p-6 mx-auto xl:px-0" id="video">
                <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 lg:mt-20 my-4 rounded-2xl ">
                  <div className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 ">
                    <iframe
                      src={link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            );
          }
          if (isList(element)) {
            const s = element.substring(7);
            const arr = s.split("|");
            return (
              <ol className="pl-10">
                {arr.map((listItem, i) => {
                  return (
                    <li>
                      <span>{i + 1}. </span>
                      {t(listItem)}
                    </li>
                  );
                })}
              </ol>
            );
          }
          if (isImage(element)) {
            const s = element.substring(7);
            const arr = s.split("|");
            return (
              <div className="flex flex-wrap justify-center m-5 md:m-0">
                {arr.length == 3 &&
                  arr.map((image) => {
                    return (
                      <div className="m-2">
                        <img
                          src={image}
                          className="rounded-xl mx-auto my-5 md:my-10 lg:w-[350px] w-[full]"
                        ></img>
                      </div>
                    );
                  })}
                {arr.length == 2 &&
                  arr.map((image) => {
                    return (
                      <div className="m-2">
                        <img
                          src={image}
                          className="rounded-xl mx-auto my-5 md:my-10  lg:w-[500px] w-[full]"
                        ></img>
                      </div>
                    );
                  })}
                {arr.length == 1 &&
                  arr.map((image) => {
                    return (
                      <img
                        src={image}
                        className="rounded-xl mx-auto my-5 lg:w-[600px] w-[full]"
                      ></img>
                    );
                  })}
                {arr.length >= 4 &&
                  arr.map((image) => {
                    return (
                      <img
                        src={image}
                        className="rounded-xl mx-auto my-5 md:my-10  md:w-[340px] lg:w-[460px] w-[full]"
                      ></img>
                    );
                  })}
              </div>
            );
          } else return <p className="m-3">{t(element)}</p>;
        })}
      </div>
    </>
  );
};

export default OtherPage;

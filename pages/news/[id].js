import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import allNews from "../../json/news.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function isImage(str) {
  return str.startsWith("__IMG__");
}
function isGroup(str) {
  return str.startsWith("__GRP__");
}
const BlogPage = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const news = allNews[id];

  if (id >= news?.length)
    return (
      <>
        <div className="lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]">
          <div className="flex justify-between cursor-pointer">
            <a className="flex hover:text-[#DC143C] align-middle">
              <span className="mx-3"> &lt;</span>
              <span className="">More News</span>
            </a>
            <p className="text-[#DC143C]">Level Up! June 23rd 2022</p>
          </div>
        </div>
      </>
    );

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <img
        className="w-full h-[500px] object-cover"
        src={news?.heroImage}
      ></img>
      <div className="lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]">
        <div className="flex justify-between cursor-pointer">
          <a className="flex hover:text-[#DC143C] align-middle">
            <span className="mx-3"> &lt;</span>
            <span className="">More News</span>
          </a>
          <p className="text-[#DC143C]">Level Up! June 23rd 2022</p>
        </div>
        <h1 className="text-center text-3xl lg:m-20 my-10">{news?.title}</h1>
        {news?.para?.map((element, index) => {
          if (isGroup(element)) {
            const s = element.substring(7);
            const arr = s.split("|");
            return (
              <div className="flex scroll-x-auto overflow-scroll hide-scrollbar m-5 md:m-0">
                {arr.length == 3 &&
                  arr.map((image) => {
                    return (
                      <div className="m-2">
                        <img
                          src={image}
                          className="rounded-xl mx-auto my-10 lg:w-[400px] w-[full]"
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
                          className="rounded-xl mx-auto my-10 lg:w-[600px] w-[full]"
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
                        className="rounded-xl mx-auto my-5 lg:w-[300px] w-[full]"
                      ></img>
                    );
                  })}
              </div>
            );
          } else return <p className="m-3">{element}</p>;
        })}
      </div>
    </>
  );
};

export default BlogPage;

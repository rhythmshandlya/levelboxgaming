import React from "react";
import Banner from "./Banner";
import useData from "./hooks/useData";

const Banners = () => {
  const { banners } = useData();
  return (
    <div className="mt-10 mb-10">
      {banners?.map((banner, i) => {
        return <Banner data={banner} key={i} />;
      })}
    </div>
  );
};

export default Banners;

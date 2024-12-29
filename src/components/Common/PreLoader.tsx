import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-[#0F1014]">
      <span className="loader h-16 w-16"></span>
    </div>

  );
};

export default PreLoader;
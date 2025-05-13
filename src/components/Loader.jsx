import React from "react";
import { useState } from "react";
function Loader() {
  let [loadingStatus, setLoadingStatus] = useState(false);
  const loaderHandler = () => {
    setLoadingStatus((prev) => !prev);
  };
  return (
    <>
      <div className="w-full">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold pt-15">This is a Loader App</h1>
          <p className="text-2xl font-light pt-2">
            A spinner (also known as a loading spinner or loading indicator) is
            a visual component used in user interfaces to indicate that a
            process or action is currently in progress.
          </p>
        </div>
        <div className="mt-3 max-w-md mx-auto">
          <button
            className="text-xl p-4 rounded-lg bg-violet-400 hover:bg-violet-500 cursor-pointer w-[30%] flex items-center gap-2 text-white"
            onClick={loaderHandler}
          >
            Click Me!
            {loadingStatus ? <div className="loader"> </div> : ""}
          </button>
        </div>
      </div>
    </>
  );
}

export default Loader;

import { useState, useEffect } from "react";
import { ArrowUp } from "./icons";

export function ScrollTop(params) {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      {showButton && (
        <div
          className="w-9 h-9 bg-gray-200 hover:bg-gray-200 rounded-full fixed bottom-4 right-4 hover:-translate-y-1 transition-all flex justify-center items-center dark:bg-gray-700 dark:border-gray-500 shadow-sm border-gray-300 border hover:shadow-md"
          onClick={scrollToTop}>
          <ArrowUp />
        </div>
      )}
    </>
  );
}

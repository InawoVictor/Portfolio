import { useEffect, useState } from "react";

const useHeaderShadow = () => {
const [headerShadow, setHeaderShadow] = useState(false)
  
//Handle nav shadow
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHeaderShadow(" 1px solid grey")
      } else {
        setHeaderShadow("none");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return headerShadow
};

export default useHeaderShadow; 
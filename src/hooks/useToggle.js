import { useState } from "react";

function useToggle(initailVal = false) {
  const [state, setState] = useState(initailVal);

  const toggle = () => {
    setState(!state);
  };
  return [state, setState];
}

export default useToggle;

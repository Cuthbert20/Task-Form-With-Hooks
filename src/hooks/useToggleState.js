import { useState } from "react";

function useToggleState(initailVal = false) {
  const [state, setState] = useState(initailVal);

  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggleState;

import { useState } from "react";

export default initalState => {
  const [value, setValue] = useState(initalState);

  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};

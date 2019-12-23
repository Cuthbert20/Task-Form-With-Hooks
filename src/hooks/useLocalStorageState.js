//Custom hook that sets and check local browser storage.
//this is a custom hook that we can use in all kinds of apps.
import { useState, useEffect } from "react";

//defining our function then passing in key as the argument
//key will be whatever we want to save to local storage
//for this app that is "todos"
//If nothing in localStorage under key then we will use the
//second Argument defaultVal
function UseLocalStorageState(key, defaultVal) {
  // make piece of state, based off of value in localStorage or defaultVal.
  //we want to state inital value to be whatever is on localStorage.
  // we are going to pass in  a function as the initialVal to useState for State
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  // use useEffect to update local storage whenever that piece of storage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
//example of useing useLocalStorageState--
// const [todos, setTodos] = useLocalStorageState("todos", [])
export default UseLocalStorageState;

import React, { useState } from "react";
import { useAppContext } from "./context";

const Search = () => {
  const { name, setName } = useAppContext();
  const [input, setinput] = useState(name);

  return (
    <>
      <form className=" p-4 w-full flex justify-center items-center">
        <input
          className="w-1/3  px-5 py-3 flex  border rounded-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              e.preventDefault();
              setName(e.target.value);
            }
          }}
          autoFocus
        />
      </form>
    </>
  );
};

export default Search;

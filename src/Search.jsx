import React from "react";
import { useAppContext } from "./context";

const Search = () => {
  const { name, setName } = useAppContext();

  return (
    <>
      <form
        className=" p-4 w-full flex justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="w-1/3  px-5 py-3 flex  border rounded-full focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default Search;

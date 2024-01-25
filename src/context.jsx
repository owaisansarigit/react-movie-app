import React, { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const apiKey = "bab4b3d6";
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    fetchData();
  }, [name]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${name}&apikey=${apiKey}`
      );
      const result = await response.json();
      if (result.Search) {
        setData(result.Search);
      } else {
        setData([]);
      }
    } catch (error) {
      setisError(true);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ data, name, setName, isError, Loading }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { AppProvider, useAppContext };

import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const apiKey = "bab4b3d6";
  const [name, setName] = useState("avengers");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [name]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?s=${name}&apikey=${apiKey}`
      );
      const result = await response.json();
      if (result.Search) {
        setLoading(false);
        setData(result.Search);
        console.log(data);
      }
    } catch (error) {
      setIsError(true);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ data, name, setName, isError, loading }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { AppProvider, useAppContext };

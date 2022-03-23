import { useState, useEffect, createContext, useContext } from "react";

const MemeContext = createContext();

export const useMemeContext = () => useContext(MemeContext);

const MemeState = ({ children }) => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((results) => setTemplates(results.data.memes))
      .catch((err) => console.error(err));
  }, []);

  return (
    <MemeContext.Provider
      value={{ templates, selectedTemplate, setSelectedTemplate }}
    >
      {children}
    </MemeContext.Provider>
  );
};

export default MemeState;

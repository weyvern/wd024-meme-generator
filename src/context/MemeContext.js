import { useState, useEffect, createContext, useContext } from "react";

const MemeContext = createContext();

export const useMemeContext = () => useContext(MemeContext);

const MemeState = ({ children }) => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (e, inputIdx) =>
    setInputs(
      inputs.map((input, i) => (i === inputIdx ? e.target.value : input))
    );

  const handleSelect = (template) => {
    setSelectedTemplate(template);
    setInputs(Array(template.box_count).fill(""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("username", "mbuti");
    formData.append("password", "pollopazzo");
    formData.append("template_id", selectedTemplate.id);

    inputs.forEach((input, index) =>
      formData.append(`boxes[${index}][text]`, input)
    );

    try {
      const res = await fetch("https://api.imgflip.com/caption_image", {
        method: "POST",
        body: formData
      });
      const { data } = await res.json();
      setSelectedTemplate((prev) => ({ ...prev, url: data.url }));
      setInputs(Array(selectedTemplate.box_count).fill(""));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((results) => setTemplates(results.data.memes))
      .catch((err) => console.error(err));
  }, []);

  return (
    <MemeContext.Provider
      value={{
        templates,
        selectedTemplate,
        handleSelect,
        inputs,
        handleInputChange,
        handleSubmit
      }}
    >
      {children}
    </MemeContext.Provider>
  );
};

export default MemeState;

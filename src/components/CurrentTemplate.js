import { useMemeContext } from "../context/MemeContext";

const CurrentTemplate = () => {
  const { selectedTemplate } = useMemeContext();
  return selectedTemplate ? (
    <img src={selectedTemplate.url} alt={selectedTemplate.name} />
  ) : (
    "No template has been selected"
  );
};

export default CurrentTemplate;

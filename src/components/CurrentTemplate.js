import { useMemeContext } from "../context/MemeContext";

const CurrentTemplate = () => {
  const { selectedTemplate } = useMemeContext();
  return (
    <div className="col-md-6">
      {selectedTemplate ? (
        <img
          src={selectedTemplate.url}
          alt={selectedTemplate.name}
          className="img-fluid"
        />
      ) : (
        "No template has been selected"
      )}
    </div>
  );
};

export default CurrentTemplate;

import { useMemeContext } from "../context/MemeContext";

const CurrentTemplate = () => {
  const { selectedTemplate } = useMemeContext();
  return (
    <div className="col-md-6">
      <div className="row justify-content-center">
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
    </div>
  );
};

export default CurrentTemplate;

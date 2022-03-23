import { useMemeContext } from "../context/MemeContext";

const TemplateSelector = () => {
  const { templates, handleSelect } = useMemeContext();

  const handleClick = (template) => handleSelect(template);

  return (
    <div className="col-md-3" style={{ height: "600px", overflowY: "scroll" }}>
      <div className="row">
        {templates.map((template) => (
          <div
            className="col-md-4"
            key={template.id}
            onClick={() => handleClick(template)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={template.url}
              alt={template.name}
              width="80"
              height="80"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;

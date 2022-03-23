import { useMemeContext } from "../context/MemeContext";

const TemplateSelector = () => {
  const { templates, setSelectedTemplate } = useMemeContext();

  const handleClick = (template) => setSelectedTemplate(template);

  return templates.map((template) => (
    <div key={template.id} onClick={() => handleClick(template)}>
      {template.name}
    </div>
  ));
};

export default TemplateSelector;

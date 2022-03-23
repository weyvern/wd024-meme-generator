import TemplateSelector from "./components/TemplateSelector";
import CurrentTemplate from "./components/CurrentTemplate";
import Editor from "./components/Editor";
import MemeState from "./context/MemeContext";

const App = () => {
  return (
    <MemeState>
      <h1>Meme Generator</h1>
      <TemplateSelector />
      <CurrentTemplate />
      <Editor />
    </MemeState>
  );
};

export default App;

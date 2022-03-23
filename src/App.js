import TemplateSelector from "./components/TemplateSelector";
import CurrentTemplate from "./components/CurrentTemplate";
import Editor from "./components/Editor";
import MemeState from "./context/MemeContext";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">Meme Generator</h1>
      <MemeState>
        <div className="row">
          <TemplateSelector />
          <CurrentTemplate />
          <Editor />
        </div>
      </MemeState>
    </div>
  );
};

export default App;

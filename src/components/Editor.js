import { useMemeContext } from "../context/MemeContext";

const Editor = () => {
  const { inputs, handleInputChange, handleSubmit } = useMemeContext();

  return (
    <div className="col-md-3">
      {!!inputs.length && (
        <form onSubmit={handleSubmit}>
          {inputs.map((input, i) => (
            <div className="mb-3" key={i}>
              <label className="form-label">Caption {i + 1}:</label>
              <input
                value={input}
                className="form-control"
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-success">
            Create meme
          </button>
        </form>
      )}
    </div>
  );
};

export default Editor;

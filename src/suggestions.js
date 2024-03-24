const Suggestions = ({ title }) => {
  return (
    <div className="suggestions">
      <div className="suggestionHeading">{title}</div>
      <div className="suggestionsScrollBar">
        <div className="suggestionCard"></div>
      </div>
    </div>
  );
};

export default Suggestions;

import { useEffect } from "react";

const Suggestions = ({ title }) => {
  return (
    <div className="suggestions">
      <div className="suggestionHeading">{title}</div>
      <div className="suggestionsScrollBar">
        <div className="suggestionCard">
          <div className="suggestionImg">
            <img src="harryPotter.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;

import React from "react";
function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emojiEntry}
        </span>
        <span>{props.nameEntry}</span>
      </dt>
      <dd>{props.meaningEntry}</dd>
    </div>
  );
}

export default Entry;
